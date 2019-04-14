import * as React from "react";

import { getPost } from "../interactors/getPost";
import { blogPath } from "../routes";
import { formatDate } from "../tools/formatDate";
import { parseMarkdownText } from "../tools/parseMarkdownText";
import { reducer } from "../tools/reducer";
import { executeScriptTagsById } from "../tools/scriptTagExecuter";
import { ActionType } from "../types/global";
import { GetPostQuery } from "../types/graphql";
import { Head } from "./Head";
import { NotFound } from "./NotFound";

interface State {
  post: GetPostQuery["post"];
  isInitialized: boolean;
}

interface Actions {
  init: () => ActionType<State>;
  setPost: (posts: GetPostQuery["post"]) => ActionType<State>;
  initialized: () => ActionType<State>;
}

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

const initialState: State = {
  post: null,
  isInitialized: false
};

const actions: Actions = {
  init: () => (_: State) => initialState,
  setPost: (post: GetPostQuery["post"]) => (state: State) => ({
    ...state,
    post
  }),
  initialized: () => (state: State) => ({
    ...state,
    isInitialized: true
  })
};

const createEffects = (dispatch: React.Dispatch<ActionType<State>>) => ({
  handleChangeId: (id: string) => () => {
    getPost(id).then(result => {
      result.success &&
        result.data &&
        result.data.post &&
        dispatch(actions.setPost(result.data.post));
      dispatch(actions.initialized());
      setTimeout(() => executeScriptTagsById("blog"), 100);
      return () => dispatch(actions.init());
    });
  }
});

export const BlogShow = (props: Props) => {
  const [state, dispatch] = React.useReducer(reducer<State>(), initialState);
  const effects = createEffects(dispatch);

  React.useEffect(effects.handleChangeId(props.match.params.id), [
    props.match.params.id
  ]);

  if (state.isInitialized && !state.post) {
    return <NotFound />;
  } else {
    return (
      <div id="blog">
        {state.post && (
          <div>
            <Head
              title={state.post.title}
              description={state.post.body}
              image={state.post.image}
              url={blogPath({ id: props.match.params.id })}
            />
            <div className="bgs-Content">
              <div className="bgs-Content_header">
                <div className="bgs-Content_header-title">
                  <div className="bgs-Content_title-text">
                    {state.post.title}
                  </div>
                  <div className="bgs-Content_title-date">
                    {formatDate(state.post.insertedAt)}
                  </div>
                </div>
                {state.post.image && (
                  <img
                    className="bgs-Content_header-image"
                    src={state.post.image}
                  />
                )}
              </div>
              <div
                className="bgs-Content_description bgs-Markdown"
                dangerouslySetInnerHTML={{
                  __html: parseMarkdownText(state.post.body)
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
};

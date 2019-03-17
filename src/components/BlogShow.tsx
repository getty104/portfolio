import * as React from "react";
import { Link } from "react-router-dom";

import { getPost } from "../interactors/getPost";
import { blogPath, blogsPath } from "../routes";
import { formatDate } from "../tools/formatDate";
import { parseMarkdownText } from "../tools/parseMarkdownText";
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
  setPost: (posts: GetPostQuery["post"]) => ActionType<State>;
  setIsInitialized: (isInitialized: boolean) => ActionType<State>;
}

interface Props {
  match: {
    params: {
      id: number;
    };
  };
}

const initialState: State = {
  post: null,
  isInitialized: false
};

const actions: Actions = {
  setPost: (post: GetPostQuery["post"]) => (state: State) => ({
    ...state,
    post
  }),
  setIsInitialized: (isInitialized: boolean) => (state: State) => ({
    ...state,
    isInitialized
  })
};

const reducer = (state: State, action: ActionType<State>) => action(state);

export const BlogShow = (props: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    getPost(props.match.params.id).then(result => {
      result.success &&
        result.data &&
        result.data.post &&
        dispatch(actions.setPost(result.data.post));
      dispatch(actions.setIsInitialized(true));
      setTimeout(() => executeScriptTagsById("blog"), 100);
      return () => dispatch(actions.setIsInitialized(false));
    });
  }, [props.match.params.id]);

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
              url={blogPath({ id: props.match.params.id.toString() })}
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
            <div className="bgs-Footer">
              <Link to={blogsPath()} className="bgs-Footer_column">
                一覧へ
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
};

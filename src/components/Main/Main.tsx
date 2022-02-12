import React, { Suspense } from 'react';
import NewComment from './NewComment/NewComment';
import InnerMain from './InnerMain';
import ReactLoading from 'react-loading';

const Main = () => {
  return (
    <main className="h-auto w-[700px]">
      <Suspense
        fallback={
          <ReactLoading
            type="spin"
            color="#5457b6"
            className="relative top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]"
            height="40px"
            width="40px"
          />
        }
      >
        <InnerMain />

        <NewComment />
      </Suspense>
    </main>
  );
};

export default Main;

import NewComment from './NewComment/NewComment';
import InnerMain from './InnerMain';

const Main = () => {
  return (
    <main className="h-auto w-[95%] md:w-[700px] 2xl:w-[60%]">
      <InnerMain />
      <NewComment innerReply={false} />
    </main>
  );
};

export default Main;

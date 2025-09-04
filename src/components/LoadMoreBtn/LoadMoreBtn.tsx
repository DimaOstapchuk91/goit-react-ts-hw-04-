import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  loadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <div className={s.buttonBox}>
      <button className={s.loadBtn} onClick={() => loadMore()} type='button'>
        Load More
      </button>
    </div>
  );
};
export default LoadMoreBtn;

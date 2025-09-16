import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import LoadingSkeleton from "./LoadingSkeleton.jsx";

function App() {
  const loading = false; // Change to true to view loading skeleton
  return (
    <div className="dark:bg-dark-background-2 dark:text-dark-text bg-background-2 text-text flex h-full min-h-screen flex-col justify-between p-2 sm:p-8">
      {loading ? <LoadingSkeleton /> : <MusicPlayer />}
      <Footer />
    </div>
  );
}

export default App;

import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="dark:bg-dark-background-2 dark:text-dark-text bg-background-2 text-text flex h-full min-h-screen flex-col justify-between p-8">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;

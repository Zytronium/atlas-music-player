import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="bg-background-2 text-text flex h-full min-h-screen flex-col justify-between p-8">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;

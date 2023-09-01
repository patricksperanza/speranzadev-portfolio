import Root from "./components/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RecorderKarate from "./pages/RecorderKarate";
import FrontEndFlashcards from "./pages/FullStackFlashcards";
import PlayfulPiano from "./pages/PlayfulPiano";
import GameHub from "./pages/GameHub";
import Keynotes from "./pages/Keynotes";
import Bracketology from "./pages/Bracketology";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} />
      <Route path="/recorder" element={<RecorderKarate />} />
      <Route path="/flashcards" element={<FrontEndFlashcards />} />
      <Route path="/piano" element={<PlayfulPiano />} />
      <Route path="/game" element={<GameHub />} />
      <Route path="/keynotes" element={<Keynotes />} />
      <Route path="/bracketology" element={<Bracketology />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { useState } from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
/*import FeedbackStats from "./Components/FeedbackStats"; */
import FeedbackData from "./Data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}
export default App;

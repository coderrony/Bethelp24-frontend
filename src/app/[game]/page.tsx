import LiveMatches from "@/components/custom/mainContent/LiveMatches";
import GameHeder from "./_components/GameHeder";


function GamePage() {
  return <div className="p-10 space-y-6 ">
    <GameHeder/>
    <LiveMatches/>
  </div>
}

export default GamePage;

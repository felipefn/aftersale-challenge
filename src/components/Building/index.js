import StyledBuilding from "./styled";
import BuildingFront from "./BuildingFront";
import BuildingSide from "./BuildingSide";
import BuildingSide from "./BuildingSide";

function Building() {
  return (
    <StyledBuilding>
      <BuildingFront />
      <BuildingSide/>
    </StyledBuilding>
  );
}

export default Building;

import StyledBuildingSide from "./styled";
import BuildingRoofSide from "./BuildingRoofSide"
import buildingBodySide from "./BuildingBodySide"


function BuildingSide() {
  return (
    <StyledBuildingSide>
        <BuildingRoofSide/>
        <buildingBodySide/>
      
    </StyledBuildingSide>
  );
}

export default BuildingSide;
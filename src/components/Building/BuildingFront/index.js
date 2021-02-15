import StyledBuildingFront from "./styled";
import BuildingBodyFront from "./BuildingBodyFront";
import BuildingRoofFront from "./BuildingRoofFront";

function BuildingFront() {
  return (
    <StyledBuildingFront>
      <BuildingRoofFront></BuildingRoofFront>
      <BuildingBodyFront></BuildingBodyFront>
    </StyledBuildingFront>
  );
}

export default BuildingFront;

import StyledBuildingFront from "./styled";
import BuildingBodyFront from "./BuildingBodyFront";
import BuildingRoofFront from "./BuildingRoofFront";
import BuildingFrontOutdoor from "./BuildingFrontOutdoor";


function BuildingFront() {
  return (
    <StyledBuildingFront>
      <BuildingFrontOutdoor></BuildingFrontOutdoor>
      <BuildingRoofFront></BuildingRoofFront>
      <BuildingBodyFront></BuildingBodyFront>
    </StyledBuildingFront>
  );
}

export default BuildingFront;

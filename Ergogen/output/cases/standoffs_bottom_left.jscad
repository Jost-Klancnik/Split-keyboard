function standoffs_bottom_left_extrude_14_4_outline_fn(){
    return CAG.circle({"center":[67,14.5],"radius":3.3})
.subtract(
    CAG.circle({"center":[67,14.5],"radius":2.3})
).union(
    CAG.circle({"center":[48,39.5],"radius":3.3})
.subtract(
    CAG.circle({"center":[48,39.5],"radius":2.3})
)).union(
    CAG.circle({"center":[67,71.5],"radius":3.3})
.subtract(
    CAG.circle({"center":[67,71.5],"radius":2.3})
)).union(
    CAG.circle({"center":[10,67.5],"radius":3.3})
.subtract(
    CAG.circle({"center":[10,67.5],"radius":2.3})
)).union(
    CAG.circle({"center":[9,10.5],"radius":3.3})
.subtract(
    CAG.circle({"center":[9,10.5],"radius":2.3})
)).extrude({ offset: [0, 0, 14.4] });
}




                function standoffs_bottom_left_case_fn() {
                    

                // creating part 0 of case standoffs_bottom_left
                let standoffs_bottom_left__part_0 = standoffs_bottom_left_extrude_14_4_outline_fn();

                // make sure that rotations are relative
                let standoffs_bottom_left__part_0_bounds = standoffs_bottom_left__part_0.getBounds();
                let standoffs_bottom_left__part_0_x = standoffs_bottom_left__part_0_bounds[0].x + (standoffs_bottom_left__part_0_bounds[1].x - standoffs_bottom_left__part_0_bounds[0].x) / 2
                let standoffs_bottom_left__part_0_y = standoffs_bottom_left__part_0_bounds[0].y + (standoffs_bottom_left__part_0_bounds[1].y - standoffs_bottom_left__part_0_bounds[0].y) / 2
                standoffs_bottom_left__part_0 = translate([-standoffs_bottom_left__part_0_x, -standoffs_bottom_left__part_0_y, 0], standoffs_bottom_left__part_0);
                standoffs_bottom_left__part_0 = rotate([0,0,0], standoffs_bottom_left__part_0);
                standoffs_bottom_left__part_0 = translate([standoffs_bottom_left__part_0_x, standoffs_bottom_left__part_0_y, 0], standoffs_bottom_left__part_0);

                standoffs_bottom_left__part_0 = translate([0,0,0], standoffs_bottom_left__part_0);
                let result = standoffs_bottom_left__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return standoffs_bottom_left_case_fn();
            }

        
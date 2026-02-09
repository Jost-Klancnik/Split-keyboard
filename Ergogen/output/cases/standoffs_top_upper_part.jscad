function standoffs_left_extrude_1_5_outline_fn(){
    return CAG.circle({"center":[67,14.5],"radius":2})
.union(
    CAG.circle({"center":[48,39.5],"radius":2})
).union(
    CAG.circle({"center":[67,71.5],"radius":2})
).union(
    CAG.circle({"center":[10,67.5],"radius":2})
).union(
    CAG.circle({"center":[9,10.5],"radius":2})
).extrude({ offset: [0, 0, 1.5] });
}




                function standoffs_top_upper_part_case_fn() {
                    

                // creating part 0 of case standoffs_top_upper_part
                let standoffs_top_upper_part__part_0 = standoffs_left_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let standoffs_top_upper_part__part_0_bounds = standoffs_top_upper_part__part_0.getBounds();
                let standoffs_top_upper_part__part_0_x = standoffs_top_upper_part__part_0_bounds[0].x + (standoffs_top_upper_part__part_0_bounds[1].x - standoffs_top_upper_part__part_0_bounds[0].x) / 2
                let standoffs_top_upper_part__part_0_y = standoffs_top_upper_part__part_0_bounds[0].y + (standoffs_top_upper_part__part_0_bounds[1].y - standoffs_top_upper_part__part_0_bounds[0].y) / 2
                standoffs_top_upper_part__part_0 = translate([-standoffs_top_upper_part__part_0_x, -standoffs_top_upper_part__part_0_y, 0], standoffs_top_upper_part__part_0);
                standoffs_top_upper_part__part_0 = rotate([0,0,0], standoffs_top_upper_part__part_0);
                standoffs_top_upper_part__part_0 = translate([standoffs_top_upper_part__part_0_x, standoffs_top_upper_part__part_0_y, 0], standoffs_top_upper_part__part_0);

                standoffs_top_upper_part__part_0 = translate([0,0,0], standoffs_top_upper_part__part_0);
                let result = standoffs_top_upper_part__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return standoffs_top_upper_part_case_fn();
            }

        
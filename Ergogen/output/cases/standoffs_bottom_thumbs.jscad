function standoffs_left_bottom_thumbs_extrude_14_4_outline_fn(){
    return CAG.circle({"center":[110.8228249,-17.6657076],"radius":2.3})
.extrude({ offset: [0, 0, 14.4] });
}




                function standoffs_bottom_thumbs_case_fn() {
                    

                // creating part 0 of case standoffs_bottom_thumbs
                let standoffs_bottom_thumbs__part_0 = standoffs_left_bottom_thumbs_extrude_14_4_outline_fn();

                // make sure that rotations are relative
                let standoffs_bottom_thumbs__part_0_bounds = standoffs_bottom_thumbs__part_0.getBounds();
                let standoffs_bottom_thumbs__part_0_x = standoffs_bottom_thumbs__part_0_bounds[0].x + (standoffs_bottom_thumbs__part_0_bounds[1].x - standoffs_bottom_thumbs__part_0_bounds[0].x) / 2
                let standoffs_bottom_thumbs__part_0_y = standoffs_bottom_thumbs__part_0_bounds[0].y + (standoffs_bottom_thumbs__part_0_bounds[1].y - standoffs_bottom_thumbs__part_0_bounds[0].y) / 2
                standoffs_bottom_thumbs__part_0 = translate([-standoffs_bottom_thumbs__part_0_x, -standoffs_bottom_thumbs__part_0_y, 0], standoffs_bottom_thumbs__part_0);
                standoffs_bottom_thumbs__part_0 = rotate([0,0,0], standoffs_bottom_thumbs__part_0);
                standoffs_bottom_thumbs__part_0 = translate([standoffs_bottom_thumbs__part_0_x, standoffs_bottom_thumbs__part_0_y, 0], standoffs_bottom_thumbs__part_0);

                standoffs_bottom_thumbs__part_0 = translate([0,0,0], standoffs_bottom_thumbs__part_0);
                let result = standoffs_bottom_thumbs__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return standoffs_bottom_thumbs_case_fn();
            }

        
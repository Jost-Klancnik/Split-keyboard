function plate_bottom_left_screw_head_part_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[-11.5,-9],[-11.5,85]]).appendArc([-9.5,87],{"radius":2,"clockwise":true,"large":false}).appendPoint([23.7654092,87]).appendArc([25.7453082,88.7171572],{"radius":2,"clockwise":false,"large":false}).appendPoint([26.2546918,92.2828428]).appendArc([28.2345908,94],{"radius":2,"clockwise":true,"large":false}).appendPoint([42.8603921,94]).appendArc([44.8215535,95.6077678],{"radius":2,"clockwise":false,"large":false}).appendPoint([45.1784464,97.3922322]).appendArc([47.1396079,99],{"radius":2,"clockwise":true,"large":false}).appendPoint([66.8057459,99]).appendArc([68.7785337,97.328798],{"radius":2,"clockwise":true,"large":false}).appendPoint([69.2214663,94.671202]).appendArc([71.1942541,93],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.2084973,93]).appendArc([88.031373,91.8228756],{"radius":2,"clockwise":true,"large":false}).appendPoint([88.3228756,91.1771244]).appendArc([90.1457513,90],{"radius":2,"clockwise":false,"large":false}).appendPoint([104.5,90]).appendArc([106.5,88],{"radius":2,"clockwise":true,"large":false}).appendPoint([106.5,-6.9747775]).appendArc([106.5006362,-7.0252177],{"radius":2,"clockwise":false,"large":false}).appendPoint([106.5318437,-8.2622273]).appendArc([107.8471673,-10.0911724],{"radius":2,"clockwise":false,"large":false}).appendPoint([113.6194678,-12.1921179]).appendArc([114.6815286,-13.0962436],{"radius":2,"clockwise":true,"large":false}).appendPoint([115.3733303,-14.3348424]).appendArc([116.4353911,-15.238968],{"radius":2,"clockwise":false,"large":false}).appendPoint([129.6436229,-20.0463712]).appendArc([130.838968,-22.6097966],{"radius":2,"clockwise":true,"large":false}).appendPoint([124.6826054,-39.5242639]).appendArc([122.11918,-40.719609],{"radius":2,"clockwise":true,"large":false}).appendPoint([103.0848537,-33.7916808]).appendArc([102.0227929,-32.8875551],{"radius":2,"clockwise":true,"large":false}).appendPoint([101.3309912,-31.6489563]).appendArc([100.2689304,-30.7448307],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.0606986,-25.9374275]).appendArc([85.8653535,-23.3740021],{"radius":2,"clockwise":true,"large":false}).appendPoint([89.4859064,-13.4266148]).appendArc([88.980232,-11.2889864],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.5205324,-8.0194041]).appendArc([85.4800296,-7.9800296],{"radius":2,"clockwise":true,"large":false}).appendPoint([83.0857864,-5.5857864]).appendArc([81.6715728,-5],{"radius":2,"clockwise":false,"large":false}).appendPoint([66.1942541,-5]).appendArc([64.2214663,-3.328798],{"radius":2,"clockwise":true,"large":false}).appendPoint([63.7785337,-0.671202]).appendArc([61.8057459,1],{"radius":2,"clockwise":false,"large":false}).appendPoint([52.1396079,1]).appendArc([50.1784465,-0.6077678],{"radius":2,"clockwise":false,"large":false}).appendPoint([49.8215536,-2.3922322]).appendArc([47.8603921,-4],{"radius":2,"clockwise":true,"large":false}).appendPoint([33.2345908,-4]).appendArc([31.2546918,-5.7171572],{"radius":2,"clockwise":false,"large":false}).appendPoint([30.7453082,-9.2828428]).appendArc([28.7654092,-11],{"radius":2,"clockwise":true,"large":false}).appendPoint([-9.5,-11]).appendArc([-11.5,-9],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[67,14.5],"radius":2})
.union(
    CAG.circle({"center":[48,39.5],"radius":2})
).union(
    CAG.circle({"center":[67,71.5],"radius":2})
).union(
    CAG.circle({"center":[10,67.5],"radius":2})
).union(
    CAG.circle({"center":[9,10.5],"radius":2})
)).extrude({ offset: [0, 0, 1.6] });
}




                function plate_bottom_left_screw_head_part_case_fn() {
                    

                // creating part 0 of case plate_bottom_left_screw_head_part
                let plate_bottom_left_screw_head_part__part_0 = plate_bottom_left_screw_head_part_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let plate_bottom_left_screw_head_part__part_0_bounds = plate_bottom_left_screw_head_part__part_0.getBounds();
                let plate_bottom_left_screw_head_part__part_0_x = plate_bottom_left_screw_head_part__part_0_bounds[0].x + (plate_bottom_left_screw_head_part__part_0_bounds[1].x - plate_bottom_left_screw_head_part__part_0_bounds[0].x) / 2
                let plate_bottom_left_screw_head_part__part_0_y = plate_bottom_left_screw_head_part__part_0_bounds[0].y + (plate_bottom_left_screw_head_part__part_0_bounds[1].y - plate_bottom_left_screw_head_part__part_0_bounds[0].y) / 2
                plate_bottom_left_screw_head_part__part_0 = translate([-plate_bottom_left_screw_head_part__part_0_x, -plate_bottom_left_screw_head_part__part_0_y, 0], plate_bottom_left_screw_head_part__part_0);
                plate_bottom_left_screw_head_part__part_0 = rotate([0,0,0], plate_bottom_left_screw_head_part__part_0);
                plate_bottom_left_screw_head_part__part_0 = translate([plate_bottom_left_screw_head_part__part_0_x, plate_bottom_left_screw_head_part__part_0_y, 0], plate_bottom_left_screw_head_part__part_0);

                plate_bottom_left_screw_head_part__part_0 = translate([0,0,0], plate_bottom_left_screw_head_part__part_0);
                let result = plate_bottom_left_screw_head_part__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_bottom_left_screw_head_part_case_fn();
            }

        
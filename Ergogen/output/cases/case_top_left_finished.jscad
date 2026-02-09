function board_left_xl_cutouts_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[-13.5,-11],[-13.5,87]]).appendArc([-11.5,89],{"radius":2,"clockwise":true,"large":false}).appendPoint([21.7654092,89]).appendArc([23.7453082,90.7171572],{"radius":2,"clockwise":false,"large":false}).appendPoint([24.2546918,94.2828428]).appendArc([26.2345908,96],{"radius":2,"clockwise":true,"large":false}).appendPoint([40.8603921,96]).appendArc([42.8215535,97.6077678],{"radius":2,"clockwise":false,"large":false}).appendPoint([43.1784464,99.3922322]).appendArc([45.1396079,101],{"radius":2,"clockwise":true,"large":false}).appendPoint([68.8057459,101]).appendArc([70.7785337,99.328798],{"radius":2,"clockwise":true,"large":false}).appendPoint([71.2214663,96.671202]).appendArc([73.1942541,95],{"radius":2,"clockwise":false,"large":false}).appendPoint([88.2084973,95]).appendArc([90.031373,93.8228756],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.3228756,93.1771244]).appendArc([92.1457513,92],{"radius":2,"clockwise":false,"large":false}).appendPoint([106.5,92]).appendArc([108.5,90],{"radius":2,"clockwise":true,"large":false}).appendPoint([108.5,-4.8179295]).appendArc([108.5328773,-5.1790779],{"radius":2,"clockwise":false,"large":false}).appendPoint([108.9228299,-7.303093]).appendArc([110.2059124,-8.8213299],{"radius":2,"clockwise":false,"large":false}).appendPoint([116.1828933,-10.996773]).appendArc([117.2449541,-11.9008987],{"radius":2,"clockwise":true,"large":false}).appendPoint([117.9367558,-13.1394975]).appendArc([118.9988166,-14.0436231],{"radius":2,"clockwise":false,"large":false}).appendPoint([132.2070484,-18.8510263]).appendArc([133.4023935,-21.4144517],{"radius":2,"clockwise":true,"large":false}).appendPoint([125.8779503,-42.0876894]).appendArc([123.3145249,-43.2830345],{"radius":2,"clockwise":true,"large":false}).appendPoint([100.5214282,-34.9870257]).appendArc([99.4593674,-34.0829],{"radius":2,"clockwise":true,"large":false}).appendPoint([98.7675657,-32.8443012]).appendArc([97.7055049,-31.9401756],{"radius":2,"clockwise":false,"large":false}).appendPoint([84.4972731,-27.1327724]).appendArc([83.301928,-24.569347],{"radius":2,"clockwise":true,"large":false}).appendPoint([86.9034011,-14.674381]).appendArc([86.3408121,-12.4850011],{"radius":2,"clockwise":false,"large":false}).appendPoint([83.5502292,-10.043938]).appendArc([83.4528119,-9.9528119],{"radius":2,"clockwise":true,"large":false}).appendPoint([81.0857864,-7.5857864]).appendArc([79.6715728,-7],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.1942541,-7]).appendArc([62.2214663,-5.328798],{"radius":2,"clockwise":true,"large":false}).appendPoint([61.7785337,-2.671202]).appendArc([59.8057459,-1],{"radius":2,"clockwise":false,"large":false}).appendPoint([54.1396079,-1]).appendArc([52.1784465,-2.6077678],{"radius":2,"clockwise":false,"large":false}).appendPoint([51.8215536,-4.3922322]).appendArc([49.8603921,-6],{"radius":2,"clockwise":true,"large":false}).appendPoint([35.2345908,-6]).appendArc([33.2546918,-7.7171572],{"radius":2,"clockwise":false,"large":false}).appendPoint([32.7453082,-11.2828428]).appendArc([30.7654092,-13],{"radius":2,"clockwise":true,"large":false}).appendPoint([-11.5,-13]).appendArc([-13.5,-11],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[90.7780107,-23.0337073],[103.9337073,-27.8219893]]).appendPoint([108.7219893,-14.6662927]).appendPoint([95.5662927,-9.8780107]).appendPoint([90.7780107,-23.0337073]).close().innerToCAG()
.union(
    new CSG.Path2D([[107.9823322,-31.317506],[121.1380288,-36.105788]]).appendPoint([125.9263108,-22.9500914]).appendPoint([112.7706142,-18.1618094]).appendPoint([107.9823322,-31.317506]).close().innerToCAG()
).union(
    new CSG.Path2D([[88,72],[102,72]]).appendPoint([102,86]).appendPoint([88,86]).appendPoint([88,72]).close().innerToCAG()
).union(
    new CSG.Path2D([[88,53],[102,53]]).appendPoint([102,67]).appendPoint([88,67]).appendPoint([88,53]).close().innerToCAG()
).union(
    new CSG.Path2D([[88,34],[102,34]]).appendPoint([102,48]).appendPoint([88,48]).appendPoint([88,34]).close().innerToCAG()
).union(
    new CSG.Path2D([[88,15],[102,15]]).appendPoint([102,29]).appendPoint([88,29]).appendPoint([88,15]).close().innerToCAG()
).union(
    new CSG.Path2D([[88,-4],[102,-4]]).appendPoint([102,10]).appendPoint([88,10]).appendPoint([88,-4]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,75],[83,75]]).appendPoint([83,89]).appendPoint([69,89]).appendPoint([69,75]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,56],[83,56]]).appendPoint([83,70]).appendPoint([69,70]).appendPoint([69,56]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,37],[83,37]]).appendPoint([83,51]).appendPoint([69,51]).appendPoint([69,37]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,18],[83,18]]).appendPoint([83,32]).appendPoint([69,32]).appendPoint([69,18]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,-1],[83,-1]]).appendPoint([83,13]).appendPoint([69,13]).appendPoint([69,-1]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,81],[64,81]]).appendPoint([64,95]).appendPoint([50,95]).appendPoint([50,81]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,62],[64,62]]).appendPoint([64,76]).appendPoint([50,76]).appendPoint([50,62]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,43],[64,43]]).appendPoint([64,57]).appendPoint([50,57]).appendPoint([50,43]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,24],[64,24]]).appendPoint([64,38]).appendPoint([50,38]).appendPoint([50,24]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,5],[64,5]]).appendPoint([64,19]).appendPoint([50,19]).appendPoint([50,5]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,76],[45,76]]).appendPoint([45,90]).appendPoint([31,90]).appendPoint([31,76]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,57],[45,57]]).appendPoint([45,71]).appendPoint([31,71]).appendPoint([31,57]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,38],[45,38]]).appendPoint([45,52]).appendPoint([31,52]).appendPoint([31,38]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,19],[45,19]]).appendPoint([45,33]).appendPoint([31,33]).appendPoint([31,19]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,0],[45,0]]).appendPoint([45,14]).appendPoint([31,14]).appendPoint([31,0]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,69],[26,69]]).appendPoint([26,83]).appendPoint([12,83]).appendPoint([12,69]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,50],[26,50]]).appendPoint([26,64]).appendPoint([12,64]).appendPoint([12,50]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,31],[26,31]]).appendPoint([26,45]).appendPoint([12,45]).appendPoint([12,31]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,12],[26,12]]).appendPoint([26,26]).appendPoint([12,26]).appendPoint([12,12]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,-7],[26,-7]]).appendPoint([26,7]).appendPoint([12,7]).appendPoint([12,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,69],[7,69]]).appendPoint([7,83]).appendPoint([-7,83]).appendPoint([-7,69]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,50],[7,50]]).appendPoint([7,64]).appendPoint([-7,64]).appendPoint([-7,50]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,31],[7,31]]).appendPoint([7,45]).appendPoint([-7,45]).appendPoint([-7,31]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,12],[7,12]]).appendPoint([7,26]).appendPoint([-7,26]).appendPoint([-7,12]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,-7],[7,-7]]).appendPoint([7,7]).appendPoint([-7,7]).appendPoint([-7,-7]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.5] });
}




                function plate_top_left_case_fn() {


                // creating part 0 of case plate_top_left
                let plate_top_left__part_0 = board_left_xl_cutouts_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let plate_top_left__part_0_bounds = plate_top_left__part_0.getBounds();
                let plate_top_left__part_0_x = plate_top_left__part_0_bounds[0].x + (plate_top_left__part_0_bounds[1].x - plate_top_left__part_0_bounds[0].x) / 2
                let plate_top_left__part_0_y = plate_top_left__part_0_bounds[0].y + (plate_top_left__part_0_bounds[1].y - plate_top_left__part_0_bounds[0].y) / 2
                plate_top_left__part_0 = translate([-plate_top_left__part_0_x, -plate_top_left__part_0_y, 0], plate_top_left__part_0);
                plate_top_left__part_0 = rotate([0,0,0], plate_top_left__part_0);
                plate_top_left__part_0 = translate([plate_top_left__part_0_x, plate_top_left__part_0_y, 0], plate_top_left__part_0);

                plate_top_left__part_0 = translate([0,0,0], plate_top_left__part_0);
                let result = plate_top_left__part_0;


                    return result;
                }


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


function standoffs_top_left_screw_part_extrude_6_2_outline_fn(){
    return CAG.circle({"center":[67,14.5],"radius":2})
.subtract(
    CAG.circle({"center":[67,14.5],"radius":0.9})
).union(
    CAG.circle({"center":[48,39.5],"radius":2})
.subtract(
    CAG.circle({"center":[48,39.5],"radius":0.9})
)).union(
    CAG.circle({"center":[67,71.5],"radius":2})
.subtract(
    CAG.circle({"center":[67,71.5],"radius":0.9})
)).union(
    CAG.circle({"center":[10,67.5],"radius":2})
.subtract(
    CAG.circle({"center":[10,67.5],"radius":0.9})
)).union(
    CAG.circle({"center":[9,10.5],"radius":2})
.subtract(
    CAG.circle({"center":[9,10.5],"radius":0.9})
)).extrude({ offset: [0, 0, 6.2] });
}




                function standoffs_top_bottom_part_case_fn() {


                // creating part 0 of case standoffs_top_bottom_part
                let standoffs_top_bottom_part__part_0 = standoffs_top_left_screw_part_extrude_6_2_outline_fn();

                // make sure that rotations are relative
                let standoffs_top_bottom_part__part_0_bounds = standoffs_top_bottom_part__part_0.getBounds();
                let standoffs_top_bottom_part__part_0_x = standoffs_top_bottom_part__part_0_bounds[0].x + (standoffs_top_bottom_part__part_0_bounds[1].x - standoffs_top_bottom_part__part_0_bounds[0].x) / 2
                let standoffs_top_bottom_part__part_0_y = standoffs_top_bottom_part__part_0_bounds[0].y + (standoffs_top_bottom_part__part_0_bounds[1].y - standoffs_top_bottom_part__part_0_bounds[0].y) / 2
                standoffs_top_bottom_part__part_0 = translate([-standoffs_top_bottom_part__part_0_x, -standoffs_top_bottom_part__part_0_y, 0], standoffs_top_bottom_part__part_0);
                standoffs_top_bottom_part__part_0 = rotate([0,0,0], standoffs_top_bottom_part__part_0);
                standoffs_top_bottom_part__part_0 = translate([standoffs_top_bottom_part__part_0_x, standoffs_top_bottom_part__part_0_y, 0], standoffs_top_bottom_part__part_0);

                standoffs_top_bottom_part__part_0 = translate([0,0,0], standoffs_top_bottom_part__part_0);
                let result = standoffs_top_bottom_part__part_0;


                    return result;
                }


function walls_left_extrude_20_outline_fn(){
    return new CSG.Path2D([[-13.5,-11],[-13.5,87]]).appendArc([-11.5,89],{"radius":2,"clockwise":true,"large":false}).appendPoint([21.7654092,89]).appendArc([23.7453082,90.7171572],{"radius":2,"clockwise":false,"large":false}).appendPoint([24.2546918,94.2828428]).appendArc([26.2345908,96],{"radius":2,"clockwise":true,"large":false}).appendPoint([40.8603921,96]).appendArc([42.8215535,97.6077678],{"radius":2,"clockwise":false,"large":false}).appendPoint([43.1784464,99.3922322]).appendArc([45.1396079,101],{"radius":2,"clockwise":true,"large":false}).appendPoint([68.8057459,101]).appendArc([70.7785337,99.328798],{"radius":2,"clockwise":true,"large":false}).appendPoint([71.2214663,96.671202]).appendArc([73.1942541,95],{"radius":2,"clockwise":false,"large":false}).appendPoint([88.2084973,95]).appendArc([90.031373,93.8228756],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.3228756,93.1771244]).appendArc([92.1457513,92],{"radius":2,"clockwise":false,"large":false}).appendPoint([106.5,92]).appendArc([108.5,90],{"radius":2,"clockwise":true,"large":false}).appendPoint([108.5,-4.8179295]).appendArc([108.5328773,-5.1790779],{"radius":2,"clockwise":false,"large":false}).appendPoint([108.9228299,-7.303093]).appendArc([110.2059124,-8.8213299],{"radius":2,"clockwise":false,"large":false}).appendPoint([116.1828933,-10.996773]).appendArc([117.2449541,-11.9008987],{"radius":2,"clockwise":true,"large":false}).appendPoint([117.9367558,-13.1394975]).appendArc([118.9988166,-14.0436231],{"radius":2,"clockwise":false,"large":false}).appendPoint([132.2070484,-18.8510263]).appendArc([133.4023935,-21.4144517],{"radius":2,"clockwise":true,"large":false}).appendPoint([125.8779503,-42.0876894]).appendArc([123.3145249,-43.2830345],{"radius":2,"clockwise":true,"large":false}).appendPoint([100.5214282,-34.9870257]).appendArc([99.4593674,-34.0829],{"radius":2,"clockwise":true,"large":false}).appendPoint([98.7675657,-32.8443012]).appendArc([97.7055049,-31.9401756],{"radius":2,"clockwise":false,"large":false}).appendPoint([84.4972731,-27.1327724]).appendArc([83.301928,-24.569347],{"radius":2,"clockwise":true,"large":false}).appendPoint([86.9034011,-14.674381]).appendArc([86.3408121,-12.4850011],{"radius":2,"clockwise":false,"large":false}).appendPoint([83.5502292,-10.043938]).appendArc([83.4528119,-9.9528119],{"radius":2,"clockwise":true,"large":false}).appendPoint([81.0857864,-7.5857864]).appendArc([79.6715728,-7],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.1942541,-7]).appendArc([62.2214663,-5.328798],{"radius":2,"clockwise":true,"large":false}).appendPoint([61.7785337,-2.671202]).appendArc([59.8057459,-1],{"radius":2,"clockwise":false,"large":false}).appendPoint([54.1396079,-1]).appendArc([52.1784465,-2.6077678],{"radius":2,"clockwise":false,"large":false}).appendPoint([51.8215536,-4.3922322]).appendArc([49.8603921,-6],{"radius":2,"clockwise":true,"large":false}).appendPoint([35.2345908,-6]).appendArc([33.2546918,-7.7171572],{"radius":2,"clockwise":false,"large":false}).appendPoint([32.7453082,-11.2828428]).appendArc([30.7654092,-13],{"radius":2,"clockwise":true,"large":false}).appendPoint([-11.5,-13]).appendArc([-13.5,-11],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[-11.5,-9],[-11.5,85]]).appendArc([-9.5,87],{"radius":2,"clockwise":true,"large":false}).appendPoint([23.7654092,87]).appendArc([25.7453082,88.7171572],{"radius":2,"clockwise":false,"large":false}).appendPoint([26.2546918,92.2828428]).appendArc([28.2345908,94],{"radius":2,"clockwise":true,"large":false}).appendPoint([42.8603921,94]).appendArc([44.8215535,95.6077678],{"radius":2,"clockwise":false,"large":false}).appendPoint([45.1784464,97.3922322]).appendArc([47.1396079,99],{"radius":2,"clockwise":true,"large":false}).appendPoint([66.8057459,99]).appendArc([68.7785337,97.328798],{"radius":2,"clockwise":true,"large":false}).appendPoint([69.2214663,94.671202]).appendArc([71.1942541,93],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.2084973,93]).appendArc([88.031373,91.8228756],{"radius":2,"clockwise":true,"large":false}).appendPoint([88.3228756,91.1771244]).appendArc([90.1457513,90],{"radius":2,"clockwise":false,"large":false}).appendPoint([104.5,90]).appendArc([106.5,88],{"radius":2,"clockwise":true,"large":false}).appendPoint([106.5,-6.9747775]).appendArc([106.5006362,-7.0252177],{"radius":2,"clockwise":false,"large":false}).appendPoint([106.5318437,-8.2622273]).appendArc([107.8471673,-10.0911724],{"radius":2,"clockwise":false,"large":false}).appendPoint([113.6194678,-12.1921179]).appendArc([114.6815286,-13.0962436],{"radius":2,"clockwise":true,"large":false}).appendPoint([115.3733303,-14.3348424]).appendArc([116.4353911,-15.238968],{"radius":2,"clockwise":false,"large":false}).appendPoint([129.6436229,-20.0463712]).appendArc([130.838968,-22.6097966],{"radius":2,"clockwise":true,"large":false}).appendPoint([124.6826054,-39.5242639]).appendArc([122.11918,-40.719609],{"radius":2,"clockwise":true,"large":false}).appendPoint([103.0848537,-33.7916808]).appendArc([102.0227929,-32.8875551],{"radius":2,"clockwise":true,"large":false}).appendPoint([101.3309912,-31.6489563]).appendArc([100.2689304,-30.7448307],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.0606986,-25.9374275]).appendArc([85.8653535,-23.3740021],{"radius":2,"clockwise":true,"large":false}).appendPoint([89.4859064,-13.4266148]).appendArc([88.980232,-11.2889864],{"radius":2,"clockwise":false,"large":false}).appendPoint([85.5205324,-8.0194041]).appendArc([85.4800296,-7.9800296],{"radius":2,"clockwise":true,"large":false}).appendPoint([83.0857864,-5.5857864]).appendArc([81.6715728,-5],{"radius":2,"clockwise":false,"large":false}).appendPoint([66.1942541,-5]).appendArc([64.2214663,-3.328798],{"radius":2,"clockwise":true,"large":false}).appendPoint([63.7785337,-0.671202]).appendArc([61.8057459,1],{"radius":2,"clockwise":false,"large":false}).appendPoint([52.1396079,1]).appendArc([50.1784465,-0.6077678],{"radius":2,"clockwise":false,"large":false}).appendPoint([49.8215536,-2.3922322]).appendArc([47.8603921,-4],{"radius":2,"clockwise":true,"large":false}).appendPoint([33.2345908,-4]).appendArc([31.2546918,-5.7171572],{"radius":2,"clockwise":false,"large":false}).appendPoint([30.7453082,-9.2828428]).appendArc([28.7654092,-11],{"radius":2,"clockwise":true,"large":false}).appendPoint([-9.5,-11]).appendArc([-11.5,-9],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 20] });
}




                function walls_case_fn() {


                // creating part 0 of case walls
                let walls__part_0 = walls_left_extrude_20_outline_fn();

                // make sure that rotations are relative
                let walls__part_0_bounds = walls__part_0.getBounds();
                let walls__part_0_x = walls__part_0_bounds[0].x + (walls__part_0_bounds[1].x - walls__part_0_bounds[0].x) / 2
                let walls__part_0_y = walls__part_0_bounds[0].y + (walls__part_0_bounds[1].y - walls__part_0_bounds[0].y) / 2
                walls__part_0 = translate([-walls__part_0_x, -walls__part_0_y, 0], walls__part_0);
                walls__part_0 = rotate([0,0,0], walls__part_0);
                walls__part_0 = translate([walls__part_0_x, walls__part_0_y, 0], walls__part_0);

                walls__part_0 = translate([0,0,0], walls__part_0);
                let result = walls__part_0;


                    return result;
                }




            function main() {
                let plate = translate([0,0,20],plate_top_left_case_fn());
                let standoffs_top = translate([0,0,18.5], standoffs_top_upper_part_case_fn());
                let standoffs_bottom = translate([0,0,12.3], standoffs_top_bottom_part_case_fn());
                let walls = walls_case_fn();

                return union (plate, standoffs_top, standoffs_bottom, walls);
            }


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
            
            
        
            function main() {
                return plate_top_left_case_fn();
            }

        
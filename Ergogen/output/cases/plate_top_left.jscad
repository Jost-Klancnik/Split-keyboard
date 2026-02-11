function board_left_xl_cutouts_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[-13.5,-11],[-13.5,87]]).appendArc([-11.5,89],{"radius":2,"clockwise":true,"large":false}).appendPoint([21.7654092,89]).appendArc([23.7453082,90.7171572],{"radius":2,"clockwise":false,"large":false}).appendPoint([24.2546918,94.2828428]).appendArc([26.2345908,96],{"radius":2,"clockwise":true,"large":false}).appendPoint([40.8603921,96]).appendArc([42.8215535,97.6077678],{"radius":2,"clockwise":false,"large":false}).appendPoint([43.1784464,99.3922322]).appendArc([45.1396079,101],{"radius":2,"clockwise":true,"large":false}).appendPoint([68.8057459,101]).appendArc([70.7785337,99.328798],{"radius":2,"clockwise":true,"large":false}).appendPoint([71.2214663,96.671202]).appendArc([73.1942541,95],{"radius":2,"clockwise":false,"large":false}).appendPoint([88.2084973,95]).appendArc([90.031373,93.8228756],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.3228756,93.1771244]).appendArc([92.1457513,92],{"radius":2,"clockwise":false,"large":false}).appendPoint([106.5,92]).appendArc([108.5,90],{"radius":2,"clockwise":true,"large":false}).appendPoint([108.5,-4.8179295]).appendArc([108.5328773,-5.1790779],{"radius":2,"clockwise":false,"large":false}).appendPoint([108.9228299,-7.303093]).appendArc([110.2059124,-8.8213299],{"radius":2,"clockwise":false,"large":false}).appendPoint([116.1828933,-10.996773]).appendArc([117.2449541,-11.9008987],{"radius":2,"clockwise":true,"large":false}).appendPoint([117.9367558,-13.1394975]).appendArc([118.9988166,-14.0436231],{"radius":2,"clockwise":false,"large":false}).appendPoint([132.2070484,-18.8510263]).appendArc([133.4023935,-21.4144517],{"radius":2,"clockwise":true,"large":false}).appendPoint([125.8779503,-42.0876894]).appendArc([123.3145249,-43.2830345],{"radius":2,"clockwise":true,"large":false}).appendPoint([100.5214282,-34.9870257]).appendArc([99.4593674,-34.0829],{"radius":2,"clockwise":true,"large":false}).appendPoint([98.7675657,-32.8443012]).appendArc([97.7055049,-31.9401756],{"radius":2,"clockwise":false,"large":false}).appendPoint([84.4972731,-27.1327724]).appendArc([83.301928,-24.569347],{"radius":2,"clockwise":true,"large":false}).appendPoint([86.9034011,-14.674381]).appendArc([86.3408121,-12.4850011],{"radius":2,"clockwise":false,"large":false}).appendPoint([83.5502292,-10.043938]).appendArc([83.4528119,-9.9528119],{"radius":2,"clockwise":true,"large":false}).appendPoint([81.0857864,-7.5857864]).appendArc([79.6715728,-7],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.1942541,-7]).appendArc([62.2214663,-5.328798],{"radius":2,"clockwise":true,"large":false}).appendPoint([61.7785337,-2.671202]).appendArc([59.8057459,-1],{"radius":2,"clockwise":false,"large":false}).appendPoint([54.1396079,-1]).appendArc([52.1784465,-2.6077678],{"radius":2,"clockwise":false,"large":false}).appendPoint([51.8215536,-4.3922322]).appendArc([49.8603921,-6],{"radius":2,"clockwise":true,"large":false}).appendPoint([35.2345908,-6]).appendArc([33.2546918,-7.7171572],{"radius":2,"clockwise":false,"large":false}).appendPoint([32.7453082,-11.2828428]).appendArc([30.7654092,-13],{"radius":2,"clockwise":true,"large":false}).appendPoint([-11.5,-13]).appendArc([-13.5,-11],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[90.4575825,-23.1831255],[104.0831255,-28.1424175]]).appendPoint([109.0424175,-14.5168745]).appendPoint([95.4168745,-9.5575825]).appendPoint([90.4575825,-23.1831255]).close().innerToCAG()
.union(
    new CSG.Path2D([[107.661904,-31.4669242],[121.287447,-36.4262162]]).appendPoint([126.246739,-22.8006732]).appendPoint([112.621196,-17.8413812]).appendPoint([107.661904,-31.4669242]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.75,71.75],[102.25,71.75]]).appendPoint([102.25,86.25]).appendPoint([87.75,86.25]).appendPoint([87.75,71.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.75,52.75],[102.25,52.75]]).appendPoint([102.25,67.25]).appendPoint([87.75,67.25]).appendPoint([87.75,52.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.75,33.75],[102.25,33.75]]).appendPoint([102.25,48.25]).appendPoint([87.75,48.25]).appendPoint([87.75,33.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.75,14.75],[102.25,14.75]]).appendPoint([102.25,29.25]).appendPoint([87.75,29.25]).appendPoint([87.75,14.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.75,-4.25],[102.25,-4.25]]).appendPoint([102.25,10.25]).appendPoint([87.75,10.25]).appendPoint([87.75,-4.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.75,74.75],[83.25,74.75]]).appendPoint([83.25,89.25]).appendPoint([68.75,89.25]).appendPoint([68.75,74.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.75,55.75],[83.25,55.75]]).appendPoint([83.25,70.25]).appendPoint([68.75,70.25]).appendPoint([68.75,55.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.75,36.75],[83.25,36.75]]).appendPoint([83.25,51.25]).appendPoint([68.75,51.25]).appendPoint([68.75,36.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.75,17.75],[83.25,17.75]]).appendPoint([83.25,32.25]).appendPoint([68.75,32.25]).appendPoint([68.75,17.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.75,-1.25],[83.25,-1.25]]).appendPoint([83.25,13.25]).appendPoint([68.75,13.25]).appendPoint([68.75,-1.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.75,80.75],[64.25,80.75]]).appendPoint([64.25,95.25]).appendPoint([49.75,95.25]).appendPoint([49.75,80.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.75,61.75],[64.25,61.75]]).appendPoint([64.25,76.25]).appendPoint([49.75,76.25]).appendPoint([49.75,61.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.75,42.75],[64.25,42.75]]).appendPoint([64.25,57.25]).appendPoint([49.75,57.25]).appendPoint([49.75,42.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.75,23.75],[64.25,23.75]]).appendPoint([64.25,38.25]).appendPoint([49.75,38.25]).appendPoint([49.75,23.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.75,4.75],[64.25,4.75]]).appendPoint([64.25,19.25]).appendPoint([49.75,19.25]).appendPoint([49.75,4.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.75,75.75],[45.25,75.75]]).appendPoint([45.25,90.25]).appendPoint([30.75,90.25]).appendPoint([30.75,75.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.75,56.75],[45.25,56.75]]).appendPoint([45.25,71.25]).appendPoint([30.75,71.25]).appendPoint([30.75,56.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.75,37.75],[45.25,37.75]]).appendPoint([45.25,52.25]).appendPoint([30.75,52.25]).appendPoint([30.75,37.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.75,18.75],[45.25,18.75]]).appendPoint([45.25,33.25]).appendPoint([30.75,33.25]).appendPoint([30.75,18.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.75,-0.25],[45.25,-0.25]]).appendPoint([45.25,14.25]).appendPoint([30.75,14.25]).appendPoint([30.75,-0.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.75,68.75],[26.25,68.75]]).appendPoint([26.25,83.25]).appendPoint([11.75,83.25]).appendPoint([11.75,68.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.75,49.75],[26.25,49.75]]).appendPoint([26.25,64.25]).appendPoint([11.75,64.25]).appendPoint([11.75,49.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.75,30.75],[26.25,30.75]]).appendPoint([26.25,45.25]).appendPoint([11.75,45.25]).appendPoint([11.75,30.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.75,11.75],[26.25,11.75]]).appendPoint([26.25,26.25]).appendPoint([11.75,26.25]).appendPoint([11.75,11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.75,-7.25],[26.25,-7.25]]).appendPoint([26.25,7.25]).appendPoint([11.75,7.25]).appendPoint([11.75,-7.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.25,68.75],[7.25,68.75]]).appendPoint([7.25,83.25]).appendPoint([-7.25,83.25]).appendPoint([-7.25,68.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.25,49.75],[7.25,49.75]]).appendPoint([7.25,64.25]).appendPoint([-7.25,64.25]).appendPoint([-7.25,49.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.25,30.75],[7.25,30.75]]).appendPoint([7.25,45.25]).appendPoint([-7.25,45.25]).appendPoint([-7.25,30.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.25,11.75],[7.25,11.75]]).appendPoint([7.25,26.25]).appendPoint([-7.25,26.25]).appendPoint([-7.25,11.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.25,-7.25],[7.25,-7.25]]).appendPoint([7.25,7.25]).appendPoint([-7.25,7.25]).appendPoint([-7.25,-7.25]).close().innerToCAG()
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

        
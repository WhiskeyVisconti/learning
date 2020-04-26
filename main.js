function test() {
    let obj = {
        key1: "a",
        key2: "b",
        key3: "c"
    };
    let s = 3;
    console.log(obj["key1"]);
}
test();
let color = () => {
    let obj = {
        key1: "e",
        key2: "r",
        key3: "t"
    };
    let s = 4;
    console.log('function color : отдает ' + obj["key1"]);

}
color();
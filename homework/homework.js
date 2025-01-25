const rectangle = (Length,Width) => {

    let p = (2*(Length+Width));
    let area = Length*Width;
    return (`მართკუთხედის პერმეტრი უდრის - ${p}, ხოლო ფართობი - ${area}`);
};

console.log(rectangle(6,10));

const circle = (Radius) => {



    let p = (2*3.14 * Radius);
    let area = 3.14 *Radius*Radius;
    return (`წრეწირის პერიმეტრი უდრის - ${p}, ხოლო ფართობი - ${area}`);
};

console.log(circle(2.5));




const indexOf = (a,b) => {
    return (a.indexOf(b));
};

console.log(indexOf("RoyalFlush", "F"));




const lastIndexOf = (a,b) => {
    return (a.lastIndexOf(b));
};

console.log(lastIndexOf("flushu", "u"));





const includesorNot = (a,b) => {
    return (a.includes(b));
};

console.log(includesorNot("massivecar", "car"));



const functionAt = (a,b) => {
    return (a.at(b));
};

console.log(functionAt("bighouse", 6));



const length = (a) => {
    return (a.length);
};

console.log(length("my name is anton"));



const replace = (a,b,c) => {
    return (a.replace(b,c));
};

console.log(replace("My name is anton", "anton", "lika"));



const slice = (a,b,c) => {
    return (a.slice(b,c));
};

console.log(slice("hi there",1,6))



// var title = "jon";
// var title1 = title + "it academy";
// var title2 = "webbrain 'IT' Academy 'IT'";
// var str = `IT ${title} IT Academy`
// // console.log(title2);
// console.log(str.indexOf('IT'));
// console.log(str.lastIndexOf('IT'));
// console.log(str.indexOf('IT' ,5));
// console.log(str);
// console.log(title2.concat(title1));
// console.log(title2.slice(0,4));
// console.log(title2.substring(2,5));
// console.log(title2.substr(2,5));
// console.log(parseInt(1.2588555));
// console.log(title2.lastIndexOf('IT' ,20));
// console.log(title.length);
// console.log(title2.replace('IT', 'Xon'));
// console.log(title2.replace(/'IT'/gi, 'Xon'));
// fruits = 'Orange,Apple,Grap'


// console.log(fruits.split(','));


// havo = 'sovuq';

// if(havo === 'issiq'){
//     console.log('bugun issiq');
// }
// else if(havo==='salgina'){
//     console.log(havo='sovuq');
// }
// else if(havo==='sovuq'){
//     console.log(havo='qor');
// }



// function Sum(name){
//     console.log('name:', 'Sardor', name);
//     console.log('surname:','Muktorov')
// }

// Sum('sar');
// Sum('kor');

// Sum('bor');


// function pow(a,b){
//     return a**b;
// }
// console.log(pow(2,3));


// const sqrt = (a) =>  a**0.5;

// console.log(sqrt(49));

// havo = 'quyosh'

// switch(havo){
//     case 'bulut':console.log('havo bulut');
//     break;
//     case 'yomgir':console.log('havo yomgir');
//     break;
//     case 'quyosh':console.log('havo quyosh');
//     // break;
// default:
//     console.log('mavjudmas');
//     break;
// }

// const step = (i,name='step' ) => {
//     console.log(name,i);
//     };
    
// for(let i=0; i<=10; i++){
//     // console.log(i, 'name')
//     step(i,'jon');
// }



// let ar=[4,58,1];
// //  str='12355469877'
// //  console.log(ar.push(89));
// ar.push(8);
// console.log(ar);

// const list=[
// {
//     id :1 ,
//     name :'Sardor' ,
//     job: 'developer'
// },
// {
//     id :2 ,
//     name :'Sardor' ,
//     job: 'developer'
// },{
//     id :3 ,
//     name :'Sardor' ,
//     job: 'developer'
// },
// ];

// const list=()=>{
//     let sum=0;
//     list.map((value)=>{
//        return sum=sum +value;
//     })
// console.log(sum);



// const Test =(str1,str2)=>{
//     let sum=0;
//     if (sum= str1===str2){
//         console.log(sum);
//     }
// // }


// let number=[3,5,23,4,5,6,5];
// sum=0;
// number.map((value)=>{
//     if(value>=5 && value <20){
//         console.log(value);
//         sum += value;
//     }
// });
// console.log(sum);


// let number=[45,678,89,9,87,67,8];
// sum=0;
// number.map((value)=>{
// if(value>=10 && value<=90) {sum += value;
// console.log(value);
// }

// });
// console.log(sum);
// var a=0;
// let fruits =[ 'orange', 'apple','banana'];

// fruits.map((value)=>{
//     value.split('').map((subvalue)=>{
//   if(subvalue ==='a') a++;
// });

// })
// console.log('a=', a);

// var a=0;
// let fruits =['orange', 'banana', 'apple'];
// fruits.map((value)=>{
//     value.split('').map((subvalue)=>{
//         if(subvalue === 'a') a++;
//     });
   
// })
// console.log('a=', a);

// let str1 = ['lite'];
// let str2 = ['elite'];

// const Test=(value)=>{
//     if(str1 === 0 && str2 === 0){
//         console.log(true); 
//     }
//         else (str1!==0 && str2 !==0) 
//             console.log(false);
        

//     };

// Test();
// var non=0;
// str1.map().split('')

let number=[56,277,14,13,35,19];
// console.log(number.filter((a)=> a>=9 && a<20));

// number.fill(1,2,5);
// console.log(number);

let fruits=['orange','apple','Manga']
// console.log(fruits.sort((a,b)=>a.localeCompare(b)));
// console.log(fruits.join('').split(''));


let sums = number.reduce((total,current)=>{
    console.log(total,current)
return total > current ? total : current;
},0);
console.log(sums);


console.log(number.every((a)=> a>10));


console.log(Array.from("sdfgh"));

console.log(Array.from([1,2,3,4], (x)=> x*2));

console.log(Array.from([1,2,3,4], (x)=> 10-x));


console.log(...fruits);

for(let i=1; i<=100; i++){
    // if( i%3 ===0){
    //     console.log('fizz');
    // }
    // else if(i%5 === 0){
    //     console.log('Buzz');
            // }
      if(i%3 == 0 && i%5 == 0)
          console.log(i , 'fizzbuzz');
           
}



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

// let number=[56,277,14,13,35,19];
// // console.log(number.filter((a)=> a>=9 && a<20));

// // number.fill(1,2,5);
// // console.log(number);

// let fruits=['orange','apple','Manga']
// // console.log(fruits.sort((a,b)=>a.localeCompare(b)));
// // console.log(fruits.join('').split(''));


// let sums = number.reduce((total,current)=>{
//     console.log(total,current)
// return total > current ? total : current;
// },0);
// console.log(sums);


// console.log(number.every((a)=> a>10));


// console.log(Array.from("sdfgh"));

// console.log(Array.from([1,2,3,4], (x)=> x*2));

// console.log(Array.from([1,2,3,4], (x)=> 10-x));


// console.log(...fruits);

// for(let i=1; i<=100; i++){
//     if( i%3 ===0){
//         console.log('fizz');
//     }
//     else if(i%5 === 0){
//         console.log('Buzz');
//             // }
//       if(i%3 == 0 && i%5 == 0)
//           console.log(i , 'fizzbuzz');
           
// }


// let fruits=['orange','apple','Manga'];
// var a=0;
// fruits.map((value)=>{
//     value.split('').map((subvalue)=>{
//     if(subvalue === 'a') a++;
    
//     })
// })
// console.log("a=" , a);


// str = " 'orangAe', 'aplla','aaa' "

// var f=0;
// var b=0;

// for(let i=0; i< str.length; i++){

// if ( str[i] === 'a' || str[i] ==='A') f++;
// }
// console.log(f ,b);



// a=0;

// for(let i = 0; i <str.length; i++){
//     let newStr= str.toLowerCase();
//     if(newStr[i] === 'a') a++;
// }
// console.log(a);

// str ='abba'

// const check =(a,b) => {
//  let s='';
//  for (let i= a.length-1; i>=0; i--){
//   s += a[i];

// }
// console.log(s===a);

// }

// check('abba'); 


// ar = [3,45,56,6,7,9]

// let sum=0;

// ar.map((value)=>{
//  sum += value;
// })

// console.log(sum);


//  var ar=['wbguieb','tuywfgo','iqugvihbfwdbhwvhbv'];

// a =0;
// ar.join('').split('').map((value)=> value === 'w' && a++)
   
// console.log(a);

// let obj ={
//     id : 1,
// //     name: 'sardor',
//     job:'developer',
//     fullname: function(){
//         return this.name + ' ' +  this.job;
//     }
// }

// // Object.freeze(obj);
// // obj.name = 'new name'


// // delete obj.name
// console.log(obj.fullname());


let list = [

{
id: 1,
name:'Sardor',
surname: 'Muktorov',
 depatment: 'back-end',         
},

{
 id: 2,
name:'Anvarara',
surname: 'Muktorova',
depatment: 'develop',         
},

{
    id: 3,
name:'Shahzoda',
surname: 'Panjizoda',
depatment: 'front-end',         
},

{
 id: 4,
name:'Bobir',
surname: 'Shukurov',
depatment: 'front-end',         
},

];


// const sortbyName = ()=>{
//     console.log(list.sort((a,b)=> a.name.localeCompare(b.name)));
// }
//  sortbyName();


//  const sortbyId = ()=>{
//     console.log(list.sort((a,b)=> b.id - a.id));
// }
//  sortbyId();


//  const deletebyName = (id)=>{

//     console.log(list.filter((value)=> value.id !== id ));
// }
//  deletebyName(3);


// const print  =()=> {
 
//     list.map((value)=>{
//         console.log(value);

//     })
// }

// print();




// var arr = [
//     {
//         name:'asasadh',
//         status: 'asbgbBbsa'
//     },
//     {
//         name:'BBbbasasadh',
//         status: 'asbgAAAbBbsa'
//     }
// ]
 

//     //  
//    const sortbyl =() =>{
//        let sum=0;
//     const newarr = arr.map((value.name)=>{
//         if(value.name == "a") {sum += value.name; sum++}
    
//    console.log(sum);
//    }
//    )
// }

//    sortbyl(newarr);



//    let sum =0;

   // arr.join('').split('').map(({value})=> value === 'a'&& sum++)

   //      console.log('a=', sum);
  

//    dollar
//    var f= Math.floor(Math.random() *100);
//    var g= 15000;
//    var sum = f*g;
//    console.log(`Dollar kiriting! ${sum} 1$ o'zbek so'mida 15000 so'mni tashkil etadi.`)
    
// var c= 2021;
// var d= Math.floor(Math.random() *2000);
// var  birth= c-d;

// console.log(` Tug'ilgan sanangizni kiriting  ${d} Transfer ${birth}`);

// var firstvar = 'Shokhzoda';
// var secondvar ='Panjizoda';


// console.log(` Birinchi o'zgaruvchi ${firstvar} Ikkinchi o'zgaruvchi ${secondvar} Go`);
// console.log(`Birinchi o'zgaruvchi ${firstvar.replace('Shokhzoda' , 'Panjizoda')} Ikkinchi o'zgaruvchi ${secondvar.replace('Panjizoda', 'Shokhzoda')}`);

// var a= Math.floor(Math.random() *100);
// var b= Math.floor(Math.random() *100);
// var sum = (a+b)/2;

// console.log(`Son-1 ${a}  Son-2${b}  Go   ${a} va ${b}ning o'rtacha arifmetigi ${sum}`  );


// var vaqt= parseInt(Math.random()*100);
// var masofa= parseInt(Math.random()*1000);
// var tezlik = Math.floor(masofa / vaqt);

// console.log(`Vaqt(minutda) ${vaqt} masofa ${masofa} Go  Sizning masofangiz: ${masofa}km,  Vaqtingiz: ${vaqt} minut , Tezligingiz:${tezlik}m/s`)


// var yil= parseInt(Math.random()*2021);
// var asr= Math.floor((yil / 100)+1);

// console.log(`Yil kiriting ${yil}  Go  Siz kiritgan yil ${asr} asrga tegishli`)


//  function getBack(){
//    var son = 32243;
//    console.log(+son.toString().split('').reverse().join(''))

//  }
//    getBack();



//    function palindrom1(p){
     
//       var b = p.split('').reverse().join('');
//       if(p==b){
//          return true;
//       }
//       else{
//          return false;
//       }
   
//    }
//      console.log(palindrom1('madona'));
//      console.log(palindrom1('madam'));



// var str = 'madam'

// const palindrom=(v)=>{
//   return str === v;
// }
// console.log(palindrom('madonna'));
// console.log(palindrom('madam'));


// function newget(a) {
//    console.log(a.split('').sort().join(''));
// };
//  newget('webmaster');


 
// function capitalLetter(nom){
//  return nom.toUpperCase();
// }
// console.log(capitalLetter('the quick brown fox'));


// const sonTekshir=(son)=>{
//    return son % 2;  'juft son';
// }
// console.log(sonTekshir(16 ,'juft son'));



// var str1='6savol("hello")';

// var newold= function(){
//    console.log(typeof str1);
// }
// newold();


// const newyoung=(a,b)=>{
//    return a**b
// }
// console.log(newyoung(7,2));


// function getletter(t,text){
//    var a=0;
// for(let i in text){
//     if(text[i]==t){a++;}
// }
// console.log(a);  
// }
// getletter('e','the given letter');



// var long = "Australia"
// var long1 = "Germany"
// var long2 = "United States of America";

// const getLongStr = ()=>{
   
//   if(long.length >= 10) {console.log(long);}
//    else if(long1.length >=10) {console.log(long1);}
//    if(long2.length>=10) {console.log(long2);} 
// }
// // console.log(getLongStr('Australia','Germany','United States of America'));

// getLongStr();


// const getCar=(c)=>{
//      if(c===13000){console.log('Gentra sizniki!')}
//      else if(c===12000){"Cobalt olsangiz bo'ladi!"}
//      else if (c===9000){"Spark bo'ladimi!"}
//      else if(c===7000){"Miniligan spark!"}
//      else{console.log('Matiz bolaveradi!')}
// }
// getCar(6000);


// const getScore=(d)=>{
//     if(d<=49){console.log('Qayta topshiring!')}
//     else if(d>=71 && d<=80){console.log('E')}
//     else if(d>=50 && d<=60){console.log('D')}
//     else if(d>=61 && d<=70){console.log('C')}
//     else if(d>=81 && d<=90){console.log('B')}
//     else if(d>=91 && d<=100){console.log('A')}
//      else if(d>=101){console.log('bunday baholash turi mavjud emas!')}

// }
// getScore(185);


// const getCars=(car)=>{
//       switch(car)
//        {case 13000: console.log('Gentra')
//       break;
//       case 10000: console.log('Neksiya')
//       break;
//       case 9000: console.log('Cobalt')
//       break;
//       case 7000: console.log('Spark')
//       default : console.log('BU buladimi?')
//        }

// }
// getCars(9000);


// const getScores=(w)=>{
//      w===1000 ? console.log(2000) : console.log(300)
// }
// getScores(1000);


// var star='';

// for(let i=0; i<=10; i++){
   
//    if( star === i.length-1){
   
//    }
//    console.log( star +='*');
// }



// var a=10;
// var star='';

// for(let i=0; i<a; i++){
//    for(j=a; j>i*2-1; j--){
//    star += '';
//    }
//    for(let k =0; k < i * 2-1; k++){
//       star += '*';
//    }
//    star += '\n'
// }
// console.log(star);



// var str = '12534'

//   const getMiddle=()=>{
    
//    for( let i=0; i<=str.length; i++){
     
//      if(str.length%2 != 0) {
// var j=Math.floor(str.length/2 );
// console.log(Number(str[j]));

// break;
//      }
//         else if(str.length%2 == 0){
//       var j=Math.floor(str.length/2 );
     
//      console.log(Number(str[j]) + Number(str[j-1]));
// break;}
//      }
//   }
// getMiddle();



//  const getpiramid=(row)=>{
//     var str='';
//      for(let i=1;i<=row;i++ ){
//       var sum = row - i;
//       // if(i==1){
//       //    str += ' '.repeat(sum) + '*'.repeat(i) + ' '.repeat(sum) + '\n'
//       // }
//       // else{
//          if(str += ' '.repeat(sum) + '*'.repeat(i+i-1) + ' ' .repeat(sum) + '\n' ){ }
//       //  }
//         }
//      return str
//  }

// console.log(getpiramid(10));





// const getNum=(c)=>{
//    var firstindex=0;
//    var lastindex = 0;
//       for(let i=0; i<= c.length; i++){
//          if(c[i] > 0){
//              firstindex = i;
//              break;
//          }
//       }
//       for( j > 0; j = c.length;  j--){
//          if(c[j] > 0){
//             console.log(c[j])
//             lastindex = j;
//             break;
//          }
// }
//       return c.slice(firstindex,lastindex+1)
// }
// console.log(getNum('00001011003450100'));


// const getnum=(k,n)=>{

//    for (let i=1; i <=n; i++){
        
//       console.log(k,i)
     
//       }
   
// }
// getnum(5,10);

//  function num(a,b){
//    for (let i=1; i <=b; i++){
        
//       console.log(a,i)
     
//       }
    
//  }
//  num(5,10);

// const getcoin=(a,b)=>{
// var c=0;
//  for(let i=0; a<=b;i++){
//    console.log(a);
//    a++;
// }
// }
// getcoin(20,50);

// const getcoins=(a,b)=>{
//   var n = a*b
//    console.log(n);
//      }
//    getcoins(1200,15);


//    const getcois=(a,b)=>{
//       var n = a*b
//        console.log(n);
//          }
//        getcois(12000,0.5);

//        const getcos=(a,b)=>{
//          var n = a*b
//           console.log(n);
//             }
//           getcos(12000,2);


// ar =[10,20,5,6,9,4,7]

// const getNums=(a,b)=>{
// // var c=0;
// //  for(let i =a; i<=b ; i++){
// //     console.log(c+=i);
// //     c++;
// //  }
// ar.sort((a,b)=>b-a)
// console.log(ar);
// }
// getNums(10,7);



// ars =[10,20,5,6,9,4,7];

// const getNus=(a,b)=>{
//    var c=[];
//    for(let i=1; i<ars.length-1; i++){
//       c.push(ars[i])
//    }   
//          console.log(c);

// }
//    getNus(10,7);


//    const getson=(a,b)=>{
//       var c=0;
//        for(let i =a; i<b ; i++){
//          console.log(c+=i);
//             // c++;
//       }
//       }
//       getson(0,10);



// var a=0;
// var b=15;
// var sum=0;
//  for(let i=a; i<=b; i++){
//    // sum++;
//     console.log(sum += i);
//  };

//  var o=1;
//  var f=15;
//  var sums=1;
//   for(let i=o; i<=f; i++){
//      console.log(sums *= i);
       
//   };
 

//   var og=1;
//   var fa=15;
//   var sums=0;
//    for(let i=og; i<=fa; i++){
     
//       console.log(Math.pow(i,2));
//    };
  
// var a='asdasS'
// var b='sAasa'

// var set = a.toLowerCase().split('').sort().join('');
// var sets = b.toLowerCase().split('').sort().join('');

// console.log(set,sets);


// const getsort=(a,b)=>{
//    var d = a.toLowerCase().split('').sort().join('');
//    var c = b.toLowerCase().split('').sort().join('');
// if(d.includes(c)){
//      console.log(true);
//    }
//    else(
//       console.log(false)
//    )
// }
// getsort('asas','sAsa');
// getsort('asAs','sbsa');


// const getsorts=(a,b)=>{
//    return a.toLowerCase().split('').sort().join('')===
//     b.toLowerCase().split('').sort().join('')
   
// }
// console.log(getsorts('asas','sAsa'));
// console.log(getsorts('asAs','sbsa'));

// const getsortss=(a,b)=>{
//    return a===b
//    }
// console.log(getsortss('asas','asas'));
// console.log(getsortss('asAs','sbsa'));

// var str='Olma,nok,Uzum,Tarvuz';
// var count=0;

// for(let i=0; i<str.length; i++){
//  if(str[i]== ', '){

//  }
//  console.log();
// }


// var arr=['Odil','Fozil','Yunus','Abdulloh','Laziza']
// var count = 0;
// const getSort=(action,name)=>{
//   if(action=='delete'){
//      console.log(arr.filter((value)=> value!==name ));
//   } else if(action == 'save'){
//      arr.map((value)=>value == name && count++);
//      if(count >=1){
//      console.log(arr);
//      }
//     else(
//        arr.push(name))
//        console.log(arr);
    
//    }
// }
// getSort('delete','Yunus');


// var arrs=['non','pishloq','somsa','patir']

// const breadDate=(action,name)=>{
//    var count = 0;
//     if(action == 'delete'){
//        console.log(arrs.filter((value)=>value !== name));
//     }
//     else if(action == 'save'){
//        arrs.map((value)=> value == name && count ++)
//        if(count >=1){
//           console.log(arrs);
//        }
//        else(
//           arrs.push(name)
//        )
//        console.log(arrs);
//     }
// }
// breadDate('save','jam');


// var ars=['google', 'leetcode','epam','LG','Samsung'];

// const getjob=(action,name)=>{
//    var sum=0;
//  if(action == 'choose'){
//    console.log(ars.filter((value)=> value!== name));
//  }
//  else if(action == 'work'){
//     ars.map((value)=> value == name && sum++)
//     if(sum >= 1){
//        console.log(ars);
//     }
//     else(ars.push(name))
//     console.log(ars);
//  }
// }
// getjob('work','LG');

// var lists=['Archa','Tol','Terak']
// const getTree=(action,name)=>{
//    var sum = 0;
//    if(action == 'check'){
//       console.log(lists.filter((value)=> value !== name));
//    }
//    else if(action == 'add' ){
//      lists.map((value) => value == name && sum++)
//      if(sum >= 1){
//         console.log(lists);
//      }
//      else(lists.push(name))
//       console.log(lists);
//    }

// }
// getTree('add','Tool');

// var str3 = 'ap, sa, do, na,';

// var sum = 0;

// var st = str3.replace(/, /g , 'a');

// for (let i=0; i< st.length ; i++){
//    if(st[i] == 'a'){
//       sum++;
//    }
// }
// console.log(sum);
// console.log(str3.length);
// console.log(st.length);


// var art= [ 1, 2 , 3 ,5 , 6 , 7 ,10]
// var s =[];
// var b = [];

//    art.map((value)=>{
//      if(value % 2 ==0 ){
//       s.push(value)
//    }
//    else(b.push(value))
// });

// console.log(s,b);




// const getNums=(s)=>{
//  array.map((value)=>{
//     if(value%2 == 0){
//        s.push(value)
//     }
//  })
// }
// getNums([],);
// var d =[];
// var f =0 ;
// array.map((value,index)=>{
   
//    if(value % 2 ==0){
//    d.push(value)
//    }
//    else if(value % 2 !== 0){
//      f= f+value;
   
//    };
// })
// console.log(d,f)

// var array=[1,2,3,4,5];

// var d =[];
// var f =0 ;
// array.map((value,index)=>{
   
//    if(value % 2 ==0){
//    console.log(array[index-1] + array[index+1])
//    } 
 
// });

// const geteven=(array)=>{
//    var d = [];
//    array.map((value,index)=>{
   
//       if(value % 2 ==0){
//          d.push(value)
//       console.log(d,array[index-1] + array[index+1])
//       } 
    
//    });
// }
// geteven(array);





// var arra=['olma','uzum','nok','olma'];
// var count =0 ;
// const getfruits=(a)=>{
//       arra.map((value)=>{
//          value == a && count++
         
//       })
//       console.log(count, `ta ${a} bor`);

// }
// getfruits('olma');


// var ars=['iphone','samsung','lg','kt','skt']
// var count =0;
// const getars=(act,name)=>{
//     if(act == 'delete'){
//       console.log(ars.filter((value)=>value !== name));
//     }
//     else if(act == 'save'){
//        console.log(ars.map((value)=> value == name && count++))
//        if(count >=1){
//           console.log(ars);
//        }
//        else(ars.push(name))
//        console.log(ars);
//     }
// }

// getars('delete', 'lg');


// var arsi=['AAABBACCD'];

// const countLetter=(a,b,c,d)=>{
//    count = 0;sum =0; sums =0; sumss = 0;
//      l ='';
//       arsi.join('').split('').map((value)=> { 
//          value == b  && count++ ,  value == a  && sum++ , value == c && sums++ , value == d && sumss++})
//          l+= a, l += sum, l+= b, l += count, l+= c, l += sums, l += d, l += sumss
//          console.log(l);
// }
// countLetter('A','B','C','D');


// const findCount=(str)=>{
   
//    var arr = str.split('');
//    var letters =[];
//    count = 1;

//    for(let i = 0 ; i < arr.length; i++){
//       if(arr[i] == arr[i+1]){
//          count++;
//       }
//       // else if(arr[i]== arr [i]){
//       //    count = 1;
//       // }
//       else {
//       // count = 1 ? ' ' : count;

//          let result = `${arr[i]}${count}`;
//          letters = [...letters,result]
//          count = 1;
        
//       }

//    }
//     return    letters.join('')
// }
// console.log(findCount('AAABBACCD'));


// const getletters=(str)=>{

//    var arz = str.split('');
//    var count =1;
// for(let i = 0; i < arz.length; i++)
//    if(arz[i] == arz[i]){
//       console.log(arz[i+1] && count++);
//    }
   
// }
// getletters('AAABBACCD');


// var obj ={
//    name: 'Shahzoda',
//    surname : 'Panjizoda',
//    job :'front-end developer'
// }

// obj.newKey='Xurriyatxon';
// obj.name = 'Sobir'
// console.log(Object.entries(obj));

// Object.entries(obj).map(([bir,ikki])=>{
// console.log(bir,ikki);
   
// })

// console.log(personalNewsDB);

// var a = prompt('Oxirgi kurgan yangiligingiz?');
// var b = prompt('Qancha baho berasiz?');

// personalNewsDB.news[a] = b;

// const numberofNews = prompt("Siz qancha yangilik ko'rdingiz?");

// const personalNewsDB ={
//       count: numberofNews,
//       news : {},
//       actors : {},
//       genres :[],
//       privat : false,
// }
// console.log(personalNewsDB);

// for(let i=0; i < 1; i++) {
//    var a = prompt('Oxirgi kurgan yangiligingiz?');
//    var b = prompt('Qancha baho berasiz?');
//    personalNewsDB.news[a]= b;

//    if(a !== '' &&  a !== null && a.length < 50 ){
//       console.log('Tayyor');
//    }
//    else {console.log('Error');
//     i--;
// }
// }

// console.log(personalNewsDB.news);


// for(let i = 0;  i < 1;  i++){
   
//      if(personalNewsDB.count < 10 ){
//         console.log("Juda oz sonli yangiliklar o'qilibdi")
//      }
//      else if(personalNewsDB.count >= 10 && personalNewsDB.count <30){
//         console.log("Siz klassik tomoshabinsiz!");
//      }
//      else if(personalNewsDB.count > 30){
//         console.log("Siz yangiliklar ishqibosiz!");
//      }
//      else(
//         console.log("Xato yuz berdi!")
//      )
// } 
// console.log(`Yangiliklar soni: ${personalNewsDB.count}`);     

// const showMyDB=(private)=>{
//    if(private == 'false'){
//       console.log(personalNewsDB);
//    }
// }
// showMyDB('false');

// const writeyourGenres=()=>{

//  for(let i =1; i <= 3; i++){

//    personalNewsDB.genres[i-1] =prompt(`Sizni sevimli janringiz? ${i}`);

//  }
// }
// writeyourGenres( );

// var car={
//    id:1,
//    name: 'nexia',
//    color: 'black',
//    speed: '200',
// }

// var arr = [1,2,3,2,4,5,3,7]
// const getCompany =()=>{
//    var a = [];

//        arr.map((value)=>{
//          if(value > 2 && value <=5){
//             a.push(value)
//       }
//        })
//       console.log(a);

//       arr.fill(10,1,4);
//       console.log(arr);

// }
//  getCompany();


// var str ='aaabbccad'
// var obj ={};
// for(let i=0; i< str.length; i++){
//    if( obj[str[i]]){
//       if(str[i] == str[i]){
//          obj[str[i]] += 1;
//       }
//    }
//    else if(obj[str[i]] = 1){
     
//    }
      
//    }

// console.log(obj);


// var str = 'web3bsr4';
// newStr = 0;
// for(let i=0; i< str.length; i++){
//    +str[i] &&  (newStr += +str[i]);
   
// }
// console.log(newStr);


// var ars=[12,3,12,4,5,13];

// const getdublicate =(b)=>{
//      ars.filter((value,index)=>{

//       if(index== b.indexOf(value)){
//          console.log(value);
//       }

//       })
// }
// getdublicate(ars);


// const newars =[];
//  ars.filter((value,index)=>{
//    index== ars.indexOf(value) &&  console.log(value);
    
// })


// d = [23,3,12,45,56,101]

// d.every((c)=>{
//      if(c > 100 )
//      {console.log(true)}
//      else(
//         console.log(false)
//      )
   
// })

// console.log(d.every((b)=> b <=100 ))



// var dan = [19,12];

// dan.every((value)=>{
//    if(value % 5 == 0){
//       console.log(true);
//    }
//    else(
//       console.log(false)
//    )
// })


// const getlet = (str)=>{
// var count =''; 
// var str1 = '';
// for(let i=0; i < str.length; i++){
//    if(i ){
//          str 
//    }

// }
// console.log(i)
// }
// getlet('string')



const getNum =(arr)=>{
   var arr1 =[];
   arr.map((value,index)=>{
      if(+arr[index]){
         arr1.push(value)
      }
   
   })
console.log(arr1)

}

getNum([1,2,'a','b'])


const get = (a,b,c) =>{
   let d = Math.pow(a,3);
   let e = Math.pow(b,3);
   let g = Math.pow(c,3);
 console.log(d+e+g)

}

get(3,4,5);


const getPar =(arr ,b) => {
     var newsi = arr.map((value,index)=>{
         if(arr[index] == b){
            console.log(true);
         }
         else(
            console.log(false)
         )
      console.log(newsi);

      })
}
 getPar(['cat','dog','it'] , 'dog')




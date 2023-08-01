//1.Print odd numbers in an array
//Function
let a = [1,2,3,4,5,6,7,8,9]
let result=[];
function odd(a)
{
    for(let i=0;i<=a.length;i++)
    {
        if(a[i]%2!=0)
        result.push(a[i])
    }
    return result;
}
console.log(odd(a));

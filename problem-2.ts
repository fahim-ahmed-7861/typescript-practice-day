
type array_type = number[];

const find_unique=(ara1 : array_type, ara2 : array_type) : array_type =>
{
    let ans : array_type = [];

    let i : number=0,j : number=0, n : number = ara1.length, m : number = ara2.length;

    while(i<n && j<m)
    {
         if(ara1[i]===ara2[j])
        {
            ans.push(ara1[i]);
            i++;
            j++;
        }

         else if(ara1[i]<ara2[j])
             i++;

         else j++;
    }

    return ans;
}


let ara1=[1,2,3,4,5];
let ara2 = [2,4,6,8];
let ans : array_type = find_unique(ara1,ara2);

console.log(ans)
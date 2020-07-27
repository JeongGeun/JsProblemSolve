
var cnt =0
var res= 0
let s=new Set();
function dfs(user_id, banned_id,bnum,arr=[])
{
    if(bnum==cnt)
    {
        let arr2 =new Array();
        let s2 =new Set();
        for(let i of arr)
        {
            s2.add(i)
        }
        if(s2.size==cnt)
        {
            arr2=Array.prototype.slice.call(arr);
            arr2.sort()
            str=""
            for(let i of arr2)
            {
                str+=i
             }
             s.add(str)
        }
        return;

    }

    for(let i =0;i<user_id.length;i++)
    {
        let flag=true;
        if(user_id[i].length!=banned_id[bnum].length)
        {
            flag =false;
        }
        else
        {
        for(let j=0;j<user_id[i].length;j++)
        {
            if(banned_id[bnum][j]!='*')
            {
                if(banned_id[bnum][j]!=user_id[i][j])
                {
                    flag=false;
                    break;
                }
            }
        }
        }
        if(flag)
        {
            arr.push(i);
            dfs(user_id, banned_id,bnum+1,arr)
            arr.pop();
        }
    }
}

function solution(user_id, banned_id) {
    
    cnt =banned_id.length;
    dfs(user_id, banned_id,0)
    console.log(s.size)
    return s.size;
}
solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],["fr*d*", "*rodo", "******", "******"]);

class pair{
    constructor(x,y,sada,cnt,)
    {
        this.x = x
        this.y = y

    }
}
function solution(participant, completion) {
    var answer = '';
    let map =new Map();
    
    for(let i of completion)
    {
        if(map.has(i))
        {
            map[i]++;        
        }
        else
        {
            map.set(i,1);
        }
    }
    for(let i of participant)
    {
        if(map.has(i))
        {
            if(map.get(i)==0)
            {
                return i;
            }
            else
            {
                map.set(i,map.get(i)-1)
            }
        }
        else
        {
            return i;
        }
    }
}
console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]))

var arr=[]
arr.push([0,[1,2]])
console.log(arr[0][1][1])
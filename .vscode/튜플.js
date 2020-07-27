function solution(s) {
    var answer = [];
    var arr=[];
    var temp=[];
    var stp=[]
    let se =new Set();
    var str =""
    for(let i =1;i<s.length-1;i++)
    {
        if(s[i]=='{')
        {
            arr.push(s[i])

        }
        else if(s[i]=='}')
        {
            temp.push(str);
            str=""    
            stp.push([temp.length,temp])
            temp=[]
            arr.pop()
        }
        else
        {
        if(arr.length>0)
        {
            if(s[i]==',')
            {
                temp.push(str);
                str=""
                continue;       
            }
            else
            {
                str+=s[i];
            }
        }
        }
    }
    
    stp.sort((a,b)=>{return a[0]-b[0]})

    for(let i =0;i<stp.length;i++)
    {
        for(let j=0;j<stp[i][1].length;j++)
        {
            if(!se.has(stp[i][1][j]))
            {
                se.add(stp[i][1][j])
                answer.push(parseInt(stp[i][1][j]))
            }
        }
    }
    //console.log(answer)
    return answer;
}
solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")
function solution(s) {
    var answer = s.length;
    for(let i =1;i<=s.length/2;i++)
    {   
        let temp=""
        let res= ""
        let arr=[]
        for(let j=0;j<s.length;j++)
        {
            temp+=s[j];
            if(temp.length==i)
            {
                arr.push(temp)
                temp=""
            }
        }
        if(temp.length>0) arr.push(temp)
        let start = arr[0]
        let cnt =1;
        for(let i=1;i<arr.length;i++)
        {
            if(start==arr[i])
            {
                cnt++;
            }
            else{
                if(cnt>1)
                {
                    res=res+cnt+start
                }
                else res+=start;

                start=arr[i];
                cnt=1
            }
        }
        if(cnt>1)
        {
            res=res+cnt+start
        }
        else res+=start;
        if(answer>res.length) answer=res.length
    }
    return answer;
}
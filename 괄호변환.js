function solution(p) {
    var answer = '';
    let lcnt =0;
    let rcnt =0
    let u=""
    let v=""
    let chk =[]
    let chk2=[]
    if(p.length==0) return p;
    for(let i =0; i<p.length;i++)
    {
        if(p[i]=='(')
        {
            chk.push(p[i])
        }
        else
        {
            if(chk.length>0)
            {chk.pop()}
            else chk2.push(p[i])
        }
    }
    if(chk.length==0&&chk2.length==0) return p;
    chk=[]
    chk2=[]

    for(let i =0; i<p.length;i++)
    {
        if(p[i]=='(')
        {
            lcnt++;
            chk.push(p[i])
        }
        else
        {
            rcnt++;
            if(chk.length>0)
            {chk.pop()}
            else chk2.push(p[i])
        }
        u+=p[i]
        if(lcnt==rcnt) 
        {
            for(let j=i+1;j<p.length;j++)
            {
                v+=p[j]
            }
            break;
        }
    }
    if(chk.length==0&&chk2.length==0)
    {
        return u+solution(v);
    }
    else{
        let str=""
        let temp="("
        temp+=solution(v)
        temp+=")"
        for(let j=1;j<u.length-1;j++)
        {
            if(u[j]==")")
            {
                str+="("
            }
            else
            {
                str+=")"
            }
        }
        return temp+str
    }
   
}

solution("()))((()","()(())()")
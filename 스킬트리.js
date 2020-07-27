function solution(skill, skill_trees) {
    var answer = 0;
    var temp=""
    
   for(let k of skill_trees)
   {
       temp=""
        for(let j of k)
        {
            for(let i of skill)
            {
                if(j==i)
               {    
                   temp+=i;
                   break;
               }
           }
        }
        var flag=false
        for(let i=0;i<temp.length;i++)
        {
            if(temp[i]!=skill[i]) flag=true;
        }
        if(!flag) answer++

   }

    return answer;
}

solution("CBD",["BACDE", "CBADF", "AECB", "BDA"])
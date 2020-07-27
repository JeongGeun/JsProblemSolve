function solution(board, moves) {
    var answer = 0;
    var ans=0;
    var arr=new Array();
    var res =new Array();
    for(let i = 0;i<board.length;i++)
    {
        let arr2 =new Array();
        for(let j=board[i].length-1;j>=0;j--)
        {
            if(board[j][i]!=0)
            {
                arr2.push(board[j][i]);
            }
        }
        arr.push(arr2);
    }
    for(let i=0;i<moves.length;i++)
    {
        let idx =moves[i]-1;
        if(arr[idx].length>0)
        {
            if(res.length>0)
            {
                if(res[res.length-1]==arr[idx][arr[idx].length-1])
                {
                    ans+=2;
                    res.pop();
                    arr[idx].pop()
                }
                else{
                    res.push(arr[idx].pop())
                }
            }
            else res.push(arr[idx].pop())
        }
    }
    answer=ans;
    console.log(answer)
    return answer;
}

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]);

var arr3 =Array.from(5,()=>0)
console.log(arr3[0])
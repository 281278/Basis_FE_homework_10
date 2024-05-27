






let numbers = [-3, 16, 8, -34, 65, 120, 42, 15, 7, -4, -7, 3, 46, 26, 83];

numbers.sort((a,b)=>a-b);
// ------------------------------------------------------------------- 1
for(let num = 0; num <numbers.length; num++)
    {
        
        if(numbers[num]>=0 && numbers[num]<=9)
            {
                console.log(">>true:"+numbers[num]);
            }
            else
            {
                console.log ("false");
            }
             
        
    }
//--------------------------------------------------------------------- 2
    for(let num = 0; num <numbers.length; num++)
        {
            
            if(numbers[num]>=15 )
                {
                    console.log("x>=15:"+numbers[num]);
                }
                else
                {
                    console.log ("false");
                }
                 
            
        }
    //     //--------------------------------------------------------------------- 3
    for(let num = 0; num <numbers.length; num++)
        {
            
            if(numbers[num] % 2 !=0 )
                {
                    console.log(">>нечетные :"+numbers[num]);
                }
                else
                {
                    console.log ("false");
                }
                 
            
        }

    //             //--------------------------------------------------------------------- 4
    for(let num = 0; num <numbers.length; num++)
        {
            
            if (num==0)
                {

                }
                else
                {
                    if(num % 3 ==0 )
                        {
                            console.log(">>индекс которых кратен трем:"+num);
                        }
                        else
                        {
                            console.log ("false");
                        }

                }
      
                 
            
        }
    //                     //--------------------------------------------------------------------- 5
    let sum=0;
    for(let num = 0; num <numbers.length; num++)
        {
         
            if(numbers[num] % 2 !=0 )
                {
                    
                    sum+=numbers[num];
                    
                }
                else
                {
                    console.log ("false");
                }
                 
                 
            
        }
        console.log("Sum:" + sum);

    //                     //--------------------------------------------------------------------- 6
    let sum_1=0;
    let sum_2=0;
    for(let num = 0; num <numbers.length; num++)
        {
           
            if(numbers[num] % 2 !=0 )
                {
                   
                    sum_1+=numbers[num];
                   
                }
                else
                {
                    
                    sum_2+=numbers[num];
                   
                }
                 
                 
            
        }
        console.log("сумма нечетных:" + sum_1);
        console.log("сумма четных:" + sum_2);
        let diff=0;
        if (sum_1>sum_2)
            {
                diff=sum_1-sum_2;
                console.log("sum_1>sum_2=" + diff);
            }
            else
            {
                diff=sum_2-sum_1;
                console.log("sum_2>sum_1=" + diff);
            }







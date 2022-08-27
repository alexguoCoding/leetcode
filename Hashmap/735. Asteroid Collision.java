class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        Deque<Integer> deque=new LinkedList<>();
        for(int i=0;i<asteroids.length;i++){
            if(deque.size()==0){
                deque.addFirst(asteroids[i]);
            }
            else if(deque.size()!=0&&((asteroids[i]>0&&deque.getFirst()>0)||(asteroids[i]<0&&deque.getFirst()<0)||(asteroids[i]>0&&deque.getFirst()<0))){
                 deque.addFirst(asteroids[i]);
                //System.out.println(asteroids[i]+"num1");
            }
            else{
                int num2=asteroids[i];
                int num1=deque.pollFirst();
              //System.out.println(num1+"num1");
                while(deque.size()>=0&&num2<0&&num1>0){
                   // System.out.println(num1+"num1");
                   // System.out.println(num2+"num2");
                    

                    if(Math.abs(num1)>Math.abs(num2)){
                         
                        deque.addFirst(num1);
                    }
                    else if(Math.abs(num1)==Math.abs(num2)){
                        
                    }
                    else if(Math.abs(num1)<Math.abs(num2)){
                        deque.addFirst(num2);
                    }
                    num1=0;
                    num2=0;
                    
                    if(deque.size()>=2){
                        num2=deque.pollFirst();
                        num1=deque.pollFirst();
                        if((num2<0&&num1<0)||(num2>0&&num1>0)||(num2>0&&num1<0)){
                            deque.addFirst(num1);
                            deque.addFirst(num2);
                            
                            break;
                        }

                        // System.out.println("test");
                        
                    }

                    // if(asteroids[i]* deque.getFirst()>=0){
                    //     break;
                    // }
                    // System.out.println("sd");
                
                }
                
            }

        }
        int size=deque.size();
        int []result=new int[size];
        for(int i=0;i<size;i++){
            result[i]=deque.pollLast();
        }
        return result;
        
    }
}
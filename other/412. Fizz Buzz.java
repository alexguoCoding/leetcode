class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> result=new ArrayList<>();
        for(int i=1;i<=n;i++){
            // System.out.println()
            if(i%15==0){
                result.add("FizzBuzz");
            }
            else if(i%5==0){
                result.add("Buzz");
            }
            else if(i%3==0){
                result.add( "Fizz");
            }
            else{
                String num=Integer.toString(i);
                result.add(num);
            }
        }
        return result;
        
    }


}
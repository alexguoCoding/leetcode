class Solution {
    public String getHint(String secret, String guess) {
          int A=0;
        char[] ch1=secret.toCharArray();
         char[] ch2=guess.toCharArray();
        for(int i=0;i<ch1.length;i++){
            if(ch1[i]==ch2[i]){
                ch1[i]='!';
                ch2[i]='!';
                A++;
                
            }
            // System.out.println(ch1[i]);
            // System.out.println(ch2[i]);
        }
    
        int B=0;
        Map<Character,Integer>map1=new HashMap<>();
        for(int i=0;i<ch1.length;i++){
            if(Character.isDigit(ch1[i])){
                if(map1.containsKey(ch1[i])){
                    map1.put(ch1[i],map1.get(ch1[i])+1);
                }
                else{
                     map1.put(ch1[i],1);
                }
            }
        }
        for(int i=0;i<ch2.length;i++){
            if(Character.isDigit(ch2[i])){
                if(map1.containsKey(ch2[i])){
                    map1.put(ch2[i],map1.get(ch2[i])-1);
                    if(map1.get(ch2[i])==0){
                        map1.remove(ch2[i]);
                    }
                    B++;
                    
                }

            }
        }
        StringBuilder sb=new StringBuilder();
        sb.append(A).append('A').append(B).append('B');
        String result=sb.toString();
        return result;
    }
}
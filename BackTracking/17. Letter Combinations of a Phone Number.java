class Solution {
    
    List<String> result=new ArrayList<>();
    StringBuilder sb = new StringBuilder();
    List<String> path=new ArrayList<>();
    Map<Character, String> phoneMap = new HashMap<Character, String>() {{
            put('2', "abc");
            put('3', "def");
            put('4', "ghi");
            put('5', "jkl");
            put('6', "mno");
            put('7', "pqrs");
            put('8', "tuv");
            put('9', "wxyz");
        }};

    public List<String> letterCombinations(String digits) {
        if(digits.length()==0){
            return result;
        }
        
         help(digits,0);
        
        return result;
    }
    public void help(String digits,int inputpos) {
        if(inputpos==digits.length()){
            result.add(sb.toString());
            return;
        }
        char  digit=digits.charAt(inputpos);
        String  letters=phoneMap.get(digit);
        for (int i=0;i<letters.length();i++){
            sb.append(letters.charAt(i));
            help(digits, inputpos+1);
            sb.deleteCharAt(inputpos);
        }
        
        
    }
}
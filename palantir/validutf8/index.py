class Solution(object):
    def validUtf8(self, data):
        """
        :type data: List[int]
        :rtype: bool
        """
        num_bytes = 0
        print '8. num_bytes ',num_bytes;
        for d in data:
            print '\n\n looping through num_bytes',d, num_bytes;
            
            b = format(d, '#010b')[2:]
            print 'b:',b;
            
            if num_bytes <= 0:
                num_bytes = b.find('0') - 1
                test = b.find('0')  # finds index of first instance of 0
                print 'Line 17 test, num_bytes', test, num_bytes,
                
                # UTF8 can only be 1 to 4 bytes long, handles 111 and 100 cases
                if num_bytes > 3 or num_bytes < -1 or num_bytes == 0:
                    return False
            else:
                print 'inside else'
                
                check = b[:2]
                print 'check', check
                
                if b[:2] != '10':
                    return False
                num_bytes -= 1
        return num_bytes <= 0
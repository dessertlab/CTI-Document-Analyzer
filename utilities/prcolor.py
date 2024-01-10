def prRed(skk): print("\033[91m {}\033[00m" .format(skk))
def prRedr(skk): print("\033[91m {}\033[00m" .format(skk),end='\r')
def prRedfl(skk): print("\033[91m {}\033[00m" .format(skk),flush=True)
 
 
def prGreen(skk): print("\033[92m {}\033[00m" .format(skk))
def prGreenfl(skk): print("\033[92m {}\033[00m" .format(skk),flush=True, end='')
 
 
def prYellow(skk): print("\033[93m {}\033[00m" .format(skk))

def prYellowfl(skk): print("\033[93m {}\033[00m" .format(skk),flush=True, end='')
 
 
def prLightPurple(skk): print("\033[94m {}\033[00m" .format(skk))
 
 
def prPurple(skk): print("\033[95m {}\033[00m" .format(skk))
 
 
def prCyan(skk): print("\033[96m {}\033[00m" .format(skk))
def prCyanfl(skk): print("\033[96m {}\033[00m" .format(skk),flush=True, end='')
 
 
def prLightGray(skk): print("\033[97m {}\033[00m" .format(skk))
 
 
def prBlack(skk): print("\033[98m {}\033[00m" .format(skk))
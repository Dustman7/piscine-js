function float2int(nbr){
    if (nbr<0) {
        for(let i=-0;i>=nbr;i--)
        {
            if (nbr<=i && nbr>i-1) {
                return i
            }
        }
    }
    if (nbr>=68719476735) {
        for(let i=68719476735;i<nbr+1;i++)
        {
            if (nbr>=i && nbr<i+1) return i
        }
    }
    for(let i=0;i<nbr+1;i++)
    {
        if (nbr>=i && nbr<i+1) return i
    }
  }
  
  function round(nbr) {
    if (nbr<0 && nbr-float2int(nbr)<-0.5) return float2int(nbr)-1
    if (nbr-float2int(nbr)< 0.5) return float2int(nbr)
    return float2int(nbr)+1
  }
  
  function ceil(nbr) {
    //if (0<nbr && nbr<1) return 1
    if (nbr<0) return float2int(nbr)
    if (nbr-float2int(nbr)!=0) return float2int(nbr)+1
    return nbr
  }
  
  function floor(nbr) {
    if (nbr<0) return float2int(nbr)-1
    return float2int(nbr)
  }
  
  function trunc(nbr) {
    if (nbr<0 && nbr>-1) return -0
    return float2int(nbr)
  }

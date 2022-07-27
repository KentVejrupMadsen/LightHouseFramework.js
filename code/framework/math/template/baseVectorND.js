module.exports=
    class BaseVectorND
    {
        constructor( n )
        {
            this.n = Array();
            this.MakeDimensions = n;
        }

        get N()
        {
            return this.n;
        }

        set N( value )
        {
            this.n = value;
        }

        set MakeDimensions( n )
        {
            this.clearDimensions();
            let idx;

            for( idx = 0;
                 idx < n;
                 idx++ )
            {
                this.n.push( 0 );
            }
        }

        clearDimensions()
        {
            this.n = Array();
        }
    }
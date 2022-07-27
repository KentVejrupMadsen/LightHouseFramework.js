const BaseVector2D = require('./baseVector2D.js');

module.exports=
    class BaseVector3D
        extends BaseVector2D
    {
        constructor( x, y, Z )
        {
            super(x, y)
            this.z = Z;
        }

        get Z()
        {
            return this.z;
        }

        set Z( value )
        {
            this.z = value;
        }


    }
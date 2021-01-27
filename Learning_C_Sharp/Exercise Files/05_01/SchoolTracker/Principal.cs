using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolTracker
{
    class Principal : Member, IPayee
    {
        public void Pay()
        {
            Console.WriteLine("paying principal");
        }
    }
}

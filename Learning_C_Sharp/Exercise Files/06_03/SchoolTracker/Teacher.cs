using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolTracker
{
    class Teacher : Member, IPayee
    {
        public string Subject { get; set; }

        public void Pay()
        {
            Console.WriteLine("paying teacher");
        }
    }
}

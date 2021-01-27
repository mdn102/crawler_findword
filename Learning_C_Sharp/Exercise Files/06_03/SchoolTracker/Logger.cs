using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolTracker
{
    class Logger
    {
        const string DefaultSystemName = "SchoolTracker";

        public static void Log(string msg, string system = DefaultSystemName, int priority = 1)
        {
            Console.WriteLine("System: {0}, Priority: {1}, Msg: {2}", system, priority, msg);
        }
    }
}

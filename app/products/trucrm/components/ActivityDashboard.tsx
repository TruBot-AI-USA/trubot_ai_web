import { Phone, Video, ClipboardList } from "lucide-react";

const ActivityDashboard = () => {
  return (
    <div className="mt-16 bg-[#0f172a] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h3 className="text-3xl font-bold mb-4">Todays Activity Dashboard</h3>
          <p className="text-gray-400 mb-6">
            See what needs to be done today. Prioritize activities and manage
            your time effectively.
          </p>
          <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            View My Activities
          </button>
        </div>

        <div className="space-y-4">
          {/* Calls Card */}
          <div className="bg-[#1e293b] p-4 rounded-xl flex items-center justify-between border border-white/5 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                <Phone size={20} />
              </div>
              <div>
                <div className="font-bold">Calls Scheduled</div>
                <div className="text-xs text-gray-400">Next: 10:30 AM</div>
              </div>
            </div>
            <div className="text-2xl font-bold">8</div>
          </div>

          {/* Meetings Card */}
          <div className="bg-[#1e293b] p-4 rounded-xl flex items-center justify-between border border-white/5 hover:border-purple-500/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-purple-600/20 p-3 rounded-lg text-purple-400">
                <Video size={20} />
              </div>
              <div>
                <div className="font-bold">Meetings Today</div>
                <div className="text-xs text-gray-400">Next: 2:00 PM</div>
              </div>
            </div>
            <div className="text-2xl font-bold">3</div>
          </div>

          {/* Tasks Card */}
          <div className="bg-[#1e293b] p-4 rounded-xl flex items-center justify-between border border-white/5 hover:border-orange-500/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-orange-600/20 p-3 rounded-lg text-orange-400">
                <ClipboardList size={20} />
              </div>
              <div>
                <div className="font-bold">Tasks Due</div>
                <div className="text-xs text-blue-400">5 high priority</div>
              </div>
            </div>
            <div className="text-2xl font-bold">12</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDashboard;

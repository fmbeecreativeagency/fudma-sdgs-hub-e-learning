import { useParams, useNavigate } from "react-router-dom";
import { sdgList } from "@/data/sdgData";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Course = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const sdg = sdgList.find((s) => s.id === Number(id));

  if (!sdg) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Course not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-background to-teal-50">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center gap-4 px-4 py-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{sdg.icon}</span>
            <h1 className="text-lg font-bold">SDG {sdg.id}: {sdg.title}</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 py-10">
        <div className="rounded-xl border bg-white p-8 shadow-sm">
          <div className="h-3 rounded-t-xl -mt-8 -mx-8 mb-6" style={{ backgroundColor: sdg.color }} />
          <h2 className="text-3xl font-bold mb-4">{sdg.title}</h2>
          <p className="text-muted-foreground text-lg mb-6">{sdg.description}</p>
          <div className="rounded-lg bg-emerald-50 p-6 text-center">
            <p className="text-emerald-800 font-medium">
              🎓 Welcome, {user?.user_metadata?.full_name || user?.email}! Course content coming soon.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Notes, quizzes, and certificates will be available here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Course;

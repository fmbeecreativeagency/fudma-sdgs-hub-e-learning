import { useParams, useNavigate } from "react-router-dom";
import { sdgList } from "@/data/sdgData";
import { sdgCourseContents } from "@/data/sdgCourseContent";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Course = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const sdg = sdgList.find((s) => s.id === Number(id));
  const courseContent = sdgCourseContents.find((c) => c.sdgId === Number(id));
  const [readChapters, setReadChapters] = useState<Set<number>>(new Set());

  const markAsRead = (chapterId: number) => {
    setReadChapters((prev) => new Set(prev).add(chapterId));
  };

  if (!sdg || !courseContent) {
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
          <h2 className="text-3xl font-bold mb-2">{sdg.title}</h2>
          <p className="text-muted-foreground text-lg mb-2">{sdg.description}</p>
          <p className="text-sm text-muted-foreground mb-6">{courseContent.overview}</p>

          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-emerald-700" />
            <span className="font-semibold text-emerald-800">
              {courseContent.chapters.length} Chapters
            </span>
            <span className="text-xs text-muted-foreground ml-2">
              {readChapters.size}/{courseContent.chapters.length} read
            </span>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {courseContent.chapters.map((chapter) => (
              <AccordionItem key={chapter.id} value={`chapter-${chapter.id}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-2">
                    {readChapters.has(chapter.id) ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    ) : (
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-full border-2 text-xs font-bold shrink-0"
                        style={{ borderColor: sdg.color, color: sdg.color }}
                      >
                        {chapter.id}
                      </span>
                    )}
                    <span className="font-medium">{chapter.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm max-w-none pl-7">
                    {chapter.content.split("\n\n").map((paragraph, i) => {
                      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                        return <h4 key={i} className="font-bold text-base mt-4 mb-1">{paragraph.replace(/\*\*/g, "")}</h4>;
                      }
                      if (paragraph.startsWith("- ")) {
                        return (
                          <ul key={i} className="list-disc pl-5 space-y-1 mb-3">
                            {paragraph.split("\n").map((item, j) => (
                              <li key={j} className="text-muted-foreground">
                                {item.replace(/^- /, "").split("**").map((part, k) =>
                                  k % 2 === 1 ? <strong key={k}>{part}</strong> : part
                                )}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={i} className="text-muted-foreground mb-3">
                          {paragraph.split("**").map((part, k) =>
                            k % 2 === 1 ? <strong key={k}>{part}</strong> : part
                          )}
                        </p>
                      );
                    })}
                    {!readChapters.has(chapter.id) && (
                      <Button
                        size="sm"
                        className="mt-4"
                        style={{ backgroundColor: sdg.color }}
                        onClick={() => markAsRead(chapter.id)}
                      >
                        <CheckCircle2 className="mr-1 h-4 w-4" /> Mark as Read
                      </Button>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
};

export default Course;

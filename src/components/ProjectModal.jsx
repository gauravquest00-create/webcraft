import { X, Calendar, ExternalLink } from 'lucide-react'
// Remove Github import

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-900">{project.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <img src={project.image} alt={project.title} className="w-full rounded-xl mb-6" />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">About this project</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{project.fullDescription}</p>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-4">Project Details</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar size={16} />
                  <span>Completed: {project.year}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="font-medium">Category:</span>
                  <span>{project.category}</span>
                </div>
              </div>

              <button onClick={onClose} className="btn-primary w-full text-center">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'



export default function Calendar({ name, slug }) {
  return (
    <div className="col-sm-6 col-md-4">
      <Link href={`/` + slug}>
        <div className="d-block card mb-4 p-2 border-cyan-500 border-1   block rounded shadow hover:shadow-lg transition">
          <div className="row">
            <div className="col">
              <div className="card-body p-0">
                <div className="card-title m-0 h5 text-dark text-center font-semibold text-lg">
                  {name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

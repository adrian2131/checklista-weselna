create table if not exists public.tasks (
  id bigint primary key generated always as identity,
  text text not null check (char_length(text) between 1 and 120),
  owner text not null default '' check (char_length(owner) <= 50),
  day text not null check (day in ('Sala', 'Kościół', 'Środa', 'Piątek do południa', 'Piątek wieczorem', 'Sobota', 'Inne')),
  done boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.tasks enable row level security;

grant select, insert, update, delete on table public.tasks to anon;
grant usage, select on sequence public.tasks_id_seq to anon;

drop policy if exists "Checklist can be viewed" on public.tasks;
create policy "Checklist can be viewed"
on public.tasks for select to anon using (true);

drop policy if exists "Checklist tasks can be added" on public.tasks;
create policy "Checklist tasks can be added"
on public.tasks for insert to anon with check (true);

drop policy if exists "Checklist tasks can be updated" on public.tasks;
create policy "Checklist tasks can be updated"
on public.tasks for update to anon using (true) with check (true);

drop policy if exists "Checklist tasks can be deleted" on public.tasks;
create policy "Checklist tasks can be deleted"
on public.tasks for delete to anon using (true);

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'tasks'
  ) then
    alter publication supabase_realtime add table public.tasks;
  end if;
end $$;
